// Detalles de las páginas de guías. El contenido funciona sin este archivo:
// <details> es nativo y las secciones abren y cierran solas. Esto solo cubre
// los casos que el navegador no resuelve por su cuenta.

// Cuando abrimos o cerramos secciones desde el código (imprimir, acordeón, un
// enlace a #seccion), el navegador dispara igual el evento `toggle`. Sin esto
// el acordeón reaccionaría a sus propios cambios y, al imprimir, cerraría todo
// lo que el manejador de impresión acaba de abrir.
//
// No sirve una bandera de "estoy en un cambio programático": `toggle` es
// ASÍNCRONO, así que se dispara cuando la bandera ya volvió a false. Hay que
// marcar cada elemento y que su propio manejador consuma la marca.
const cambiosPropios = new WeakSet();

function fijar(seccion, abierta) {
  if (seccion.open === abierta) return;
  cambiosPropios.add(seccion);
  seccion.open = abierta;
}

function esCambioPropio(seccion) {
  if (!cambiosPropios.has(seccion)) return false;
  cambiosPropios.delete(seccion);
  return true;
}

// 1. Al imprimir, abrir todas las secciones. La guía impresa se lleva al
//    hospital en papel: si sale con las secciones plegadas, sale vacía.
addEventListener("beforeprint", () => {
  document.querySelectorAll("details.seccion:not([open])").forEach((d) => {
    fijar(d, true);
    d.dataset.abiertoParaImprimir = "1";
  });
});

addEventListener("afterprint", () => {
  document.querySelectorAll("details.seccion[data-abierto-para-imprimir]").forEach((d) => {
    fijar(d, false);
    delete d.dataset.abiertoParaImprimir;
  });
});

// 2. Si llegan a la página con un enlace a una sección concreta (#plazo),
//    abrirla y llevar la vista hasta ahí.
function abrirSeccionDelHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  if (!id) return;
  const destino = document.getElementById(id);
  if (!destino) return;
  const seccion = destino.closest("details.seccion") || destino;
  if (seccion.tagName === "DETAILS") seccion.open = true; // el acordeón cierra el resto
  destino.scrollIntoView({ block: "start" });
}

addEventListener("DOMContentLoaded", abrirSeccionDelHash);
addEventListener("hashchange", abrirSeccionDelHash);

// 3. Acordeón: abrir una sección pliega las demás.
//
//    Con seis secciones abiertas a la vez la página se vuelve un muro de texto
//    y se pierde de vista qué se estaba leyendo. Dejando una sola abierta, los
//    títulos de las otras quedan siempre a la vista y se puede saltar entre
//    ellas sin desplazarse de más.
//
//    Va en JS y no con el atributo `name` de <details> (el acordeón nativo)
//    porque ese atributo obliga a la exclusividad también desde el código, y
//    entonces el manejador de impresión no podría abrir todas las secciones:
//    la guía saldría en papel con una sola.
//
//    Sin este archivo las secciones siguen funcionando, solo que independientes.
function armarAcordeon() {
  // `.resumen` (el desplegable "Ver el detalle completo del trámite") no es
  // conceptualmente una sección del acordeón: abrirlo o cerrarlo no debe
  // plegar las secciones reales, ni al revés.
  const secciones = [...document.querySelectorAll("details.seccion:not(.resumen)")];
  if (secciones.length < 2) return;

  for (const seccion of secciones) {
    seccion.addEventListener("toggle", () => {
      if (esCambioPropio(seccion) || !seccion.open) return;

      // Al cerrar las secciones de arriba, todo lo de abajo sube: el título que
      // la persona acaba de tocar se le escapa de la vista. Se mide antes y
      // después, y se compensa con el scroll para que quede donde estaba.
      const antes = seccion.getBoundingClientRect().top;
      for (const otra of secciones) {
        if (otra !== seccion) fijar(otra, false);
      }
      const desplazamiento = seccion.getBoundingClientRect().top - antes;
      if (desplazamiento) scrollBy({ top: desplazamiento, behavior: "instant" });
    });
  }
}

addEventListener("DOMContentLoaded", armarAcordeon);

// 4. En pantallas anchas, armar el índice lateral a partir de los <summary>.
//    Se genera acá y no en el HTML para no repetir en seis archivos una lista
//    que ya está en la página. El CSS lo esconde por debajo de 64rem.
function armarIndiceLateral() {
  const secciones = [...document.querySelectorAll("details.seccion[id]")];
  if (secciones.length < 2) return;

  const main = document.querySelector("main");
  if (!main || main.querySelector(".indice-lateral")) return;

  const aside = document.createElement("aside");
  aside.className = "indice-lateral";
  aside.innerHTML = '<h2>En esta página</h2><ol></ol>';
  const lista = aside.querySelector("ol");

  const enlaces = new Map();
  for (const seccion of secciones) {
    const titulo = seccion.querySelector("summary")?.textContent.trim();
    if (!titulo) continue;
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${seccion.id}`;
    a.textContent = titulo;
    li.append(a);
    lista.append(li);
    enlaces.set(seccion, a);
  }

  // El cuerpo pasa a un envoltorio para que main quede con exactamente dos
  // hijos —índice y contenido— y el sticky del índice tenga toda la altura de
  // la página para moverse. Sin esto, el índice queda encerrado en una fila
  // de grilla del alto de las migas y no llega a fijarse.
  const cuerpo = document.createElement("div");
  cuerpo.className = "cuerpo-pagina";
  cuerpo.append(...main.childNodes);
  main.append(aside, cuerpo);
  main.classList.add("con-indice");
  // El pie vive fuera de <main>, así que necesita saber por su cuenta que la
  // página se ensanchó; si no, sus enlaces no alinean con nada.
  document.body.classList.add("con-indice");

  // Marcar la sección abierta. Con <details>, "dónde estoy" es qué hay
  // abierto, no qué se cruza con el viewport: un scroll spy mentiría.
  function marcar() {
    for (const [seccion, a] of enlaces) {
      if (seccion.open) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    }
  }
  // Los cierres del acordeón también disparan `toggle`, así que el índice se
  // mantiene al día solo.
  for (const seccion of secciones) seccion.addEventListener("toggle", marcar);
  marcar();
}

addEventListener("DOMContentLoaded", armarIndiceLateral);

/* ── Espacio patrocinado de las guías ─────────────────────────────────────
 *
 * Se vende aparte del espacio del asistente (ver publicidad.html): acá el
 * anuncio va DENTRO del texto de una guía concreta, así que sirve cuando lo
 * que se ofrece se relaciona con ese trámite en particular.
 *
 * Va por JavaScript a propósito. Este archivo empieza diciendo que el
 * contenido funciona sin él, y eso se mantiene: sin JS la guía se lee entera
 * y el anuncio simplemente no aparece. Un anuncio es exactamente lo que tiene
 * que degradarse a nada, nunca el contenido.
 *
 * NO hay red publicitaria: la imagen se sirve desde este mismo dominio, no se
 * carga ningún script de terceros y no se pone ninguna cookie.
 *
 * ── Para publicar uno ───────────────────────────────────────────────────
 * 1. Imagen en public/patrocinio/, 1024×512, en .webp y .jpg.
 * 2. Completá PATROCINIO_GUIA y poné activo: true.
 * 3. `guias` decide en cuáles aparece: la lista de archivos, o "todas".
 * 4. Desplegá. Al pasar `hasta` deja de mostrarse solo.
 */
const PATROCINIO_GUIA = {
  activo: false,

  anunciante: "",
  titulo: "",
  texto: "",
  imagen: "",   // nombre en public/patrocinio/, sin extensión
  enlace: "",   // https, y de un sitio del que puedas responder
  desde: "",    // AAAA-MM-DD
  hasta: "",    // AAAA-MM-DD, incluye ese día completo

  // "todas", o los nombres de archivo donde debe salir.
  guias: "todas",
};

function patrocinioDeGuiaVigente(hoy) {
  const p = PATROCINIO_GUIA;
  if (!p.activo) return null;
  // Campo por campo: uno a medio cargar tiene que NO mostrarse, no mostrarse
  // roto. Y con fechas mal escritas tampoco, que es preferible a dejar en
  // pantalla un anuncio que el anunciante ya no está pagando.
  for (const c of ["anunciante", "titulo", "imagen", "enlace", "desde", "hasta"]) {
    if (!p[c]) return null;
  }
  if (!/^https:\/\//.test(p.enlace)) return null;

  const desde = new Date(p.desde + "T00:00:00");
  const hasta = new Date(p.hasta + "T23:59:59");
  if (isNaN(desde) || isNaN(hasta) || hoy < desde || hoy > hasta) return null;

  if (p.guias !== "todas") {
    const aqui = location.pathname.split("/").pop();
    if (!Array.isArray(p.guias) || !p.guias.includes(aqui)) return null;
  }
  return p;
}

function ponerPatrocinioDeGuia() {
  const hueco = document.getElementById("espacio-patrocinado");
  if (!hueco) return;
  const p = patrocinioDeGuiaVigente(new Date());
  if (!p) return;   // sin patrocinio el hueco queda vacío y no ocupa nada

  const a = document.createElement("a");
  a.className = "banner banner--patrocinado";
  a.href = p.enlace;
  a.target = "_blank";
  // `sponsored` lo exige Google para enlaces pagados; `noopener` es seguridad
  // básica al abrir en otra pestaña.
  a.rel = "sponsored noopener noreferrer";

  a.innerHTML =
    '<span class="banner-rotulo">Publicidad</span>' +
    '<picture>' +
      '<source srcset="/patrocinio/' + p.imagen + '.webp" type="image/webp">' +
      '<img class="banner-arte-img" src="/patrocinio/' + p.imagen + '.jpg" ' +
           'width="1024" height="512" loading="lazy" decoding="async" alt="">' +
    '</picture>' +
    '<span class="banner-texto">' +
      '<span class="banner-titulo"></span>' +
      '<span class="banner-linea"></span>' +
    '</span>';

  // El texto se escribe como TEXTO, no como HTML: lo que carga un anunciante
  // no puede terminar inyectando marcado en una guía de salud.
  a.querySelector(".banner-titulo").textContent = p.titulo;
  a.querySelector(".banner-linea").textContent = p.texto || "";
  a.querySelector("img").alt = "Publicidad de " + p.anunciante;

  hueco.replaceWith(a);
}

addEventListener("DOMContentLoaded", ponerPatrocinioDeGuia);
