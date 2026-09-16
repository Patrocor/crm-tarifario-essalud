// Service worker de digitalasistent.
//
// Para qué está: este sitio se usa DENTRO del hospital, en la sala de espera,
// con la señal del hospital. Hasta ahora, si la red se caía en mitad de un
// trámite, la persona se quedaba con una pantalla en blanco y perdía el avance.
// Con esto, todo lo que ya bajó una vez sigue estando: el asistente abre igual
// y las voces que ya escuchó se vuelven a oír sin red.
//
// Tres reglas y una prohibición:
//
//  1. NAVEGACIONES (la portada, las guías, /?asistente=1) → red primero, y si
//     no hay red, lo guardado. Así un despliegue nuevo se ve enseguida en vez
//     de quedar congelado en la versión vieja, que es el problema clásico de
//     los service workers mal hechos.
//
//  2. ARCHIVOS CON HASH (/assets/*) → lo guardado primero. Vite les pone el
//     hash en el nombre, así que un archivo con ese nombre nunca cambia de
//     contenido: preguntarle a la red es puro gasto.
//
//  3. IMÁGENES, FUENTES Y AUDIO → lo guardado primero, y lo que no esté se
//     guarda al usarlo. Es lo que hace que la voz de Rosa que ya sonó vuelva a
//     sonar sin señal. Las 61 locuciones pesan 4,2 MB en total, así que cabe
//     todo sin poner un límite artificial.
//
//  PROHIBIDO: /api/*. Ahí viven las consultas a EsSalud y la validación del QR.
//  Guardar la respuesta de un seguro sería un problema de privacidad (queda el
//  dato de una persona en el teléfono) y de exactitud (mañana el seguro puede
//  estar vencido y mostraríamos el resultado de ayer). Ni se tocan.

// Subir VERSION invalida todo lo guardado y fuerza a bajarlo de nuevo. Hay que
// hacerlo cuando cambie QUÉ se guarda o CÓMO, no en cada despliegue: los
// archivos de /assets ya traen su propio hash en el nombre.
//
// Este archivo se sirve con Cache-Control: no-store (ver vercel.json), y esa
// es la única vía para arreglar un service worker roto: si el navegador
// guardara una copia vieja de acá, un error quedaría clavado en el teléfono de
// la persona y ningún despliegue lo sacaría.
const VERSION = "v2";
const CACHE = `digitalasistent-${VERSION}`;

// Lo mínimo para que la primera visita sin red muestre algo con sentido en vez
// de un error del navegador. El resto se guarda a medida que se usa: los
// nombres de los archivos de /assets llevan hash y cambian en cada
// despliegue, así que listarlos acá obligaría a regenerar este archivo en cada
// build para nada.
// Además del index van las pocas imágenes que TODO el mundo ve antes de poder
// hacer nada: la cara de Rosa, la imagen del aviso de dengue del landing y la
// primera pieza del carrusel de la espera. Sin ellas la primera pantalla sin
// señal aparece con los recuadros rotos y el texto alternativo colgando, que
// se lee como un sitio descompuesto aunque el asistente funcione perfecto.
//
// No se lista más que esto a propósito: el resto se guarda al usarse, y una
// lista larga acá es una lista que alguien va a olvidar actualizar.
const BASE = [
  "/",
  "/index.html",
  "/guia/rosa-320.jpg",
  "/campana/dengue-tapar.webp",
  "/campana/dengue-tapar.jpg",
  "/campana/dengue-agua.webp",
  "/campana/dengue-agua.jpg",
];

self.addEventListener("install", (e) => {
  // Sin waitUntil bloqueante sobre todo: si un archivo del BASE falla, el
  // service worker igual se instala. Un shell incompleto es mejor que ninguno.
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => Promise.allSettled(BASE.map((u) => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((claves) => Promise.all(
        claves.filter((k) => k.startsWith("digitalasistent-") && k !== CACHE)
              .map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
      .then(() => calentarAssets())
  );
});

// En la PRIMERA visita, el navegador ya pidió el JS y el CSS antes de que este
// service worker existiera, así que esas peticiones no pasaron por acá y no
// quedaron guardadas. Si la persona pierde la señal antes de volver a entrar,
// el asistente no abre: justo el caso que esto viene a resolver.
//
// Entonces, apenas se activa, se lee el index y se guardan los /assets que
// declara. Se saca del HTML en vez de listarlos a mano porque Vite les cambia
// el hash en cada despliegue: una lista escrita acá quedaría vieja al día
// siguiente y nadie se enteraría.
async function calentarAssets() {
  try {
    const res = await fetch("/index.html", { cache: "no-store" });
    if (!res.ok) return;
    const html = await res.text();
    const urls = [...new Set(
      [...html.matchAll(/["'](\/assets\/[^"']+)["']/g)].map((m) => m[1])
    )];
    const c = await caches.open(CACHE);
    await Promise.allSettled(urls.map((u) => c.add(u)));
  } catch {
    // Sin red al activarse: se guardarán solos la próxima vez que se pidan.
  }
}

const esApi = (url) => url.pathname.startsWith("/api/");
const esConHash = (url) => url.pathname.startsWith("/assets/");
const esMedia = (url) => /\.(mp3|jpe?g|png|svg|webp|woff2?|pdf)$/i.test(url.pathname);

// La ÚNICA puerta para escribir en la caché, para que la regla de qué entra
// viva en un solo lugar. Solo pasa lo que salió bien y es de este sitio: una
// respuesta opaca o un 404 la envenenan, y un 206 directamente hace fallar el
// put. Devuelve la respuesta para poder encadenarla.
function guardar(clave, res) {
  if (!res || !res.ok || res.status !== 200 || res.type !== "basic") return res;
  const copia = res.clone();
  caches.open(CACHE).then((c) => c.put(clave, copia)).catch(() => {});
  return res;
}

async function deLaRedYGuardar(req) {
  return guardar(req, await fetch(req));
}

// El audio NO se puede guardar como llega.
//
// El <audio> del navegador no pide el archivo entero: manda una cabecera Range
// y el servidor le contesta 206 Partial Content. Un 206 pasa el test de
// `res.ok` —206 está dentro del rango 200-299— pero `cache.put` lo RECHAZA, y
// como el error se ignoraba en silencio, no se guardaba ni una voz. En local
// no se veía: el servidor de prueba no atiende Range y devuelve 200.
//
// Entonces, cuando el pedido es por rangos, se baja aparte una copia entera y
// se guarda ESA, indexada por la URL. Devolverle después un 200 completo a un pedido
// de rango es válido y el reproductor lo acepta sin chistar.
async function guardadoPrimero(req) {
  const hit = await caches.match(req, { ignoreVary: true })
            || await caches.match(req.url, { ignoreVary: true });
  if (hit) return hit;

  const res = await fetch(req);

  if (res.status === 206) {
    // Copia entera en segundo plano; no se hace esperar a quien está oyendo.
    fetch(req.url).then((full) => guardar(req.url, full)).catch(() => {});
    return res;
  }
  return guardar(req.url, res);
}

// `conRespaldoDePortada` SOLO puede ser true para navegaciones. Devolverle el
// index.html a un pedido de .js hace que el navegador intente ejecutar HTML
// como código y tire "Unexpected token '<'", que fue exactamente lo que pasó
// la primera vez que se probó esto sin red: los scripts de analítica caían al
// respaldo y ensuciaban la consola con errores que no eran el problema real.
async function redPrimero(req, conRespaldoDePortada = false) {
  try {
    return await deLaRedYGuardar(req);
  } catch (err) {
    const hit = await caches.match(req);
    if (hit) return hit;
    if (conRespaldoDePortada) {
      // Al menos dice qué es este sitio y que la app existe, en vez del
      // dinosaurio del navegador.
      const portada = await caches.match("/index.html");
      if (portada) return portada;
    }
    throw err;
  }
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // fuentes de Google, etc.
  if (esApi(url)) return;                          // EsSalud y el QR, nunca

  if (req.mode === "navigate") {
    e.respondWith(redPrimero(req, true));
    return;
  }
  if (esConHash(url) || esMedia(url)) {
    e.respondWith(guardadoPrimero(req));
    return;
  }
  e.respondWith(redPrimero(req));
});
