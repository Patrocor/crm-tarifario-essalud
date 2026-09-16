/**
 * CRM de costos: selección de atenciones del tarifario Essalud y liquidación para pago.
 * Ruta: /crm-costos (personal de facturación / caja).
 */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import AutocompleteCampo from "./AutocompleteCampo";
import BusquedaCatalogo from "./BusquedaCatalogo";
import { consultarDniPorApi, dniEsValido, normalizarDni } from "./consultaDni";
import {
  agregarAlCarrito,
  actualizarCantidadCarrito,
  buscarEnCatalogo,
  formatearSoles,
  generarReferenciaLiquidacion,
  quitarDelCarrito,
  textoLiquidacion,
  totalesCarrito,
} from "./crmCostos";
import {
  buscarPacientesRecientes,
  guardarPacienteReciente,
} from "./pacientesRecientes";

const URL_PREST = "/data/tarifario-prestaciones.json";
const URL_FARM = "/data/tarifario-farmacia.json";
const URL_META = "/data/tarifario-meta.json";

const estilosGlobales = `
.panel-crm {
  min-height: 100vh;
  background: #F0F4F8;
  color: #0D253D;
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
}
.panel-crm * { box-sizing: border-box; }
.panel-crm input, .panel-crm select, .panel-crm button {
  font: inherit;
}
@media print {
  .panel-crm .no-print { display: none !important; }
  .panel-crm .solo-print { display: block !important; }
}
.panel-crm .solo-print { display: none; }
@media (max-width: 768px) {
  .panel-crm-grid { grid-template-columns: 1fr !important; }
}
`;

function Btn({ children, onClick, variant = "primary", disabled, type = "button", style }) {
  const base = {
    border: "none",
    borderRadius: 10,
    padding: "12px 18px",
    fontWeight: 700,
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.55 : 1,
    fontSize: 14,
    ...style,
  };
  const variants = {
    primary: { background: "#4434D4", color: "#fff", boxShadow: "0 3px 0 rgba(0,0,0,0.2)" },
    secondary: { background: "#fff", color: "#33475B", border: "1px solid #A8C3DE" },
    danger: { background: "#FDE7ED", color: "#901638", border: "1px solid #C81E4E" },
    success: { background: "#227A4A", color: "#fff", boxShadow: "0 3px 0 rgba(0,0,0,0.2)" },
  };
  return (
    <button type={type} disabled={disabled} onClick={onClick} style={{ ...base, ...variants[variant] }}>
      {children}
    </button>
  );
}

function Campo({ label, value, onChange, placeholder }) {
  return (
    <label style={{ display: "block", marginBottom: 12 }}>
      <span style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#5B6B7D", marginBottom: 4 }}>
        {label}
      </span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: 10,
          border: "1px solid #A8C3DE",
          background: "#fff",
        }}
      />
    </label>
  );
}

export default function PanelCrmCostos() {
  const [meta, setMeta] = useState(null);
  const [prestaciones, setPrestaciones] = useState([]);
  const [farmacia, setFarmacia] = useState(null);
  const [cargaError, setCargaError] = useState("");
  const [cargaFarmacia, setCargaFarmacia] = useState(false);

  const [tab, setTab] = useState("prestacion");
  const [busqueda, setBusqueda] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("");

  const [dni, setDni] = useState("");
  const [paciente, setPaciente] = useState("");
  const [facturarA, setFacturarA] = useState("");
  const [pagare, setPagare] = useState("");
  const [dniCargando, setDniCargando] = useState(false);
  const [dniError, setDniError] = useState("");
  const ultimoDniConsultado = useRef("");

  const [carrito, setCarrito] = useState([]);
  const [paso, setPaso] = useState("atencion");
  const [referencia, setReferencia] = useState("");
  const [pagoConfirmado, setPagoConfirmado] = useState(false);
  const [copiado, setCopiado] = useState(false);

  useEffect(() => {
    let cancel = false;
    (async () => {
      try {
        const [rMeta, rPrest] = await Promise.all([
          fetch(URL_META),
          fetch(URL_PREST),
        ]);
        if (!rMeta.ok || !rPrest.ok) throw new Error("No se pudo cargar el tarifario");
        const jMeta = await rMeta.json();
        const jPrest = await rPrest.json();
        if (!cancel) {
          setMeta(jMeta);
          setPrestaciones(jPrest);
        }
      } catch (e) {
        if (!cancel) setCargaError(e.message || "Error al cargar datos");
      }
    })();
    return () => { cancel = true; };
  }, []);

  const cargarFarmacia = useCallback(async () => {
    if (farmacia !== null || cargaFarmacia) return;
    setCargaFarmacia(true);
    try {
      const r = await fetch(URL_FARM);
      if (!r.ok) throw new Error("Farmacia no disponible");
      setFarmacia(await r.json());
    } catch (e) {
      setCargaError(e.message || "Error farmacia");
    } finally {
      setCargaFarmacia(false);
    }
  }, [farmacia, cargaFarmacia]);

  const categorias = useMemo(() => {
    const set = new Set();
    for (const p of prestaciones) {
      if (p.categoria) set.add(p.categoria);
    }
    return [...set].sort((a, b) => a.localeCompare(b, "es"));
  }, [prestaciones]);

  const catalogoActivo = useMemo(
    () => (tab === "farmacia" ? farmacia || [] : prestaciones),
    [tab, farmacia, prestaciones],
  );

  const resultados = useMemo(() => {
    let base = catalogoActivo;
    if (tab === "prestacion" && categoriaFiltro) {
      base = base.filter((p) => p.categoria === categoriaFiltro);
    }
    return buscarEnCatalogo(base, busqueda, 50);
  }, [catalogoActivo, busqueda, categoriaFiltro, tab]);

  const sugerenciasPaciente = useMemo(
    () =>
      buscarPacientesRecientes(paciente || dni, 10).map((p, i) => ({
        ...p,
        id: p.dni || `p-${i}-${p.paciente}`,
      })),
    [paciente, dni],
  );

  const sugerenciasFacturar = useMemo(
    () =>
      buscarPacientesRecientes(facturarA, 8).map((p, i) => ({
        ...p,
        id: `f-${p.dni || i}-${p.facturarA}`,
      })),
    [facturarA],
  );

  const totales = useMemo(() => totalesCarrito(carrito), [carrito]);

  const consultarDni = useCallback(async (valorDni) => {
    const numero = normalizarDni(valorDni);
    if (!dniEsValido(numero)) return;
    if (ultimoDniConsultado.current === numero) return;
    ultimoDniConsultado.current = numero;
    setDniCargando(true);
    setDniError("");
    try {
      const data = await consultarDniPorApi(numero);
      if (data.nombreCompleto) {
        setPaciente(data.nombreCompleto);
        setFacturarA((prev) => (prev.trim() ? prev : data.nombreCompleto));
      }
    } catch (e) {
      ultimoDniConsultado.current = "";
      setDniError(e.message || "No se pudo consultar el DNI");
    } finally {
      setDniCargando(false);
    }
  }, []);

  useEffect(() => {
    if (!dniEsValido(dni)) {
      ultimoDniConsultado.current = "";
      return;
    }
    const t = setTimeout(() => consultarDni(dni), 400);
    return () => clearTimeout(t);
  }, [dni, consultarDni]);

  const aplicarPacienteReciente = (reg) => {
    if (reg.dni) setDni(reg.dni);
    if (reg.paciente) setPaciente(reg.paciente);
    if (reg.facturarA) setFacturarA(reg.facturarA);
    setDniError("");
  };

  const persistirAtencionActual = () => {
    guardarPacienteReciente({ dni, paciente, facturarA });
  };

  const onAgregar = (item) => {
    setCarrito((c) => agregarAlCarrito(c, item, 1));
  };

  const irAPago = () => {
    if (!carrito.length) return;
    persistirAtencionActual();
    setReferencia(generarReferenciaLiquidacion());
    setPagoConfirmado(false);
    setPaso("pago");
  };

  const liquidacionTexto = useMemo(
    () =>
      textoLiquidacion({
        paciente,
        facturarA,
        dni,
        pagare,
        referencia,
        carrito,
        totales,
        meta,
      }),
    [paciente, facturarA, dni, pagare, referencia, carrito, totales, meta],
  );

  const copiarLiquidacion = async () => {
    try {
      await navigator.clipboard.writeText(liquidacionTexto);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const imprimir = () => window.print();

  if (cargaError && !prestaciones.length) {
    return (
      <div className="panel-crm" style={{ padding: 24 }}>
        <style>{estilosGlobales}</style>
        <p style={{ color: "#A32B3E" }}>{cargaError}</p>
      </div>
    );
  }

  return (
    <div className="panel-crm">
      <style>{estilosGlobales}</style>

      <header
        className="no-print"
        style={{
          background: "linear-gradient(135deg, #4434D4 0%, #5B4FE9 100%)",
          color: "#fff",
          padding: "20px 16px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ margin: 0, fontSize: 12, opacity: 0.85, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            CRM · Tarifario Nivel I
          </p>
          <h1 style={{ margin: "6px 0 8px", fontSize: 22, fontWeight: 800 }}>
            Liquidación de atenciones
          </h1>
          <p style={{ margin: 0, fontSize: 14, opacity: 0.92, maxWidth: 520 }}>
            Elija las prestaciones o medicamentos atendidos y genere el total para cobro.
          </p>
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 16px 48px" }}>
        {paso === "atencion" && (
          <>
            <section
              className="no-print"
              style={{
                background: "#fff",
                borderRadius: 14,
                border: "1px solid #E3E8EE",
                padding: "16px 18px",
                marginBottom: 16,
              }}
            >
              <h2 style={{ margin: "0 0 12px", fontSize: 16 }}>Datos de la atención</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
                <AutocompleteCampo
                  label="DNI del paciente"
                  value={dni}
                  onChange={(v) => {
                    setDni(normalizarDni(v));
                    setDniError("");
                  }}
                  placeholder="8 dígitos"
                  inputMode="numeric"
                  maxLength={8}
                  disabled={dniCargando}
                  hint={dniCargando ? "Consultando RENIEC…" : "Se autocompleta nombre al ingresar el DNI"}
                  onBlurExtra={() => {
                    if (dniEsValido(dni)) consultarDni(dni);
                  }}
                  sugerencias={sugerenciasPaciente.filter((p) => p.dni)}
                  onSeleccionarSugerencia={aplicarPacienteReciente}
                  renderSugerencia={(p) => (
                    <>
                      <strong>{p.dni}</strong>
                      {" — "}
                      {p.paciente || "Sin nombre"}
                    </>
                  )}
                />
                {dniError && (
                  <p style={{ gridColumn: "1 / -1", margin: 0, fontSize: 12, color: "#A32B3E" }}>{dniError}</p>
                )}
                <AutocompleteCampo
                  label="Paciente"
                  value={paciente}
                  onChange={setPaciente}
                  placeholder="Nombre completo"
                  sugerencias={sugerenciasPaciente}
                  onSeleccionarSugerencia={aplicarPacienteReciente}
                  renderSugerencia={(p) => (
                    <>
                      {p.paciente}
                      {p.dni ? (
                        <span style={{ color: "#5B6B7D" }}> · DNI {p.dni}</span>
                      ) : null}
                    </>
                  )}
                />
                <AutocompleteCampo
                  label="Facturar a"
                  value={facturarA}
                  onChange={setFacturarA}
                  placeholder="Titular o empresa"
                  sugerencias={sugerenciasFacturar}
                  onSeleccionarSugerencia={(p) => setFacturarA(p.facturarA || p.paciente)}
                  renderSugerencia={(p) => p.facturarA || p.paciente}
                />
                <Campo label="Pagaré Nº (opcional)" value={pagare} onChange={setPagare} placeholder="Ej. 497137" />
              </div>
            </section>

            <div
              className="no-print"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1.2fr) minmax(0, 1fr)",
                gap: 16,
                alignItems: "start",
              }}
            >
              <section
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  border: "1px solid #E3E8EE",
                  padding: "16px 18px",
                  minHeight: 360,
                }}
              >
                <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                  {[
                    { id: "prestacion", label: "Prestaciones" },
                    { id: "farmacia", label: "Farmacia" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => {
                        setTab(t.id);
                        setBusqueda("");
                        if (t.id === "farmacia") cargarFarmacia();
                      }}
                      style={{
                        padding: "8px 14px",
                        borderRadius: 999,
                        border: tab === t.id ? "2px solid #4434D4" : "1px solid #A8C3DE",
                        background: tab === t.id ? "#EDEBFE" : "#fff",
                        fontWeight: 700,
                        fontSize: 13,
                        cursor: "pointer",
                      }}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                <BusquedaCatalogo
                  tab={tab}
                  busqueda={busqueda}
                  onBusquedaChange={setBusqueda}
                  resultados={resultados}
                  onAgregar={onAgregar}
                  catalogoListo={catalogoActivo.length > 0}
                />

                {tab === "prestacion" && (
                  <select
                    value={categoriaFiltro}
                    onChange={(e) => setCategoriaFiltro(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: 10,
                      border: "1px solid #A8C3DE",
                      marginBottom: 12,
                      background: "#fff",
                    }}
                  >
                    <option value="">Todas las categorías</option>
                    {categorias.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                )}

                {tab === "farmacia" && farmacia === null && (
                  <p style={{ fontSize: 14, color: "#5B6B7D" }}>
                    {cargaFarmacia ? "Cargando catálogo de farmacia…" : "Preparando catálogo…"}
                  </p>
                )}

                <ul style={{ listStyle: "none", margin: 0, padding: 0, maxHeight: 420, overflow: "auto" }}>
                  {resultados.map((item) => (
                    <li
                      key={`${item.tipo}-${item.codigo}`}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        padding: "10px 0",
                        borderBottom: "1px solid #E3E8EE",
                      }}
                    >
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ margin: 0, fontSize: 14, fontWeight: 600, lineHeight: 1.35 }}>
                          {item.descripcion}
                        </p>
                        <p style={{ margin: "4px 0 0", fontSize: 12, color: "#5B6B7D" }}>
                          Cód. {item.codigo}
                          {item.medida ? ` · ${item.medida}` : ""}
                          {item.categoria ? ` · ${item.categoria}` : ""}
                        </p>
                      </div>
                      <div style={{ textAlign: "right", flexShrink: 0 }}>
                        <p style={{ margin: 0, fontWeight: 800, fontSize: 14 }}>
                          {formatearSoles(item.precioTotal)}
                        </p>
                        <button
                          type="button"
                          onClick={() => onAgregar(item)}
                          style={{
                            marginTop: 6,
                            padding: "6px 12px",
                            borderRadius: 8,
                            border: "none",
                            background: "#4434D4",
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: 12,
                            cursor: "pointer",
                          }}
                        >
                          Agregar
                        </button>
                      </div>
                    </li>
                  ))}
                  {!resultados.length && catalogoActivo.length > 0 && (
                    <li style={{ padding: 16, color: "#5B6B7D", fontSize: 14 }}>Sin resultados. Pruebe otra búsqueda.</li>
                  )}
                </ul>
              </section>

              <section
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  border: "2px solid #4434D4",
                  padding: "16px 18px",
                  position: "sticky",
                  top: 12,
                }}
              >
                <h2 style={{ margin: "0 0 8px", fontSize: 16 }}>Detalle a cobrar</h2>
                <p style={{ margin: "0 0 12px", fontSize: 13, color: "#5B6B7D" }}>
                  {carrito.length ? `${carrito.length} línea(s)` : "Agregue atenciones del catálogo"}
                </p>

                <ul style={{ listStyle: "none", margin: 0, padding: 0, maxHeight: 280, overflow: "auto" }}>
                  {carrito.map((l) => (
                    <li
                      key={l.id}
                      style={{
                        padding: "10px 0",
                        borderBottom: "1px solid #E3E8EE",
                        fontSize: 13,
                      }}
                    >
                      <p style={{ margin: "0 0 6px", fontWeight: 600, lineHeight: 1.3 }}>{l.descripcion}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                        <label style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12 }}>
                          Cant.
                          <input
                            type="number"
                            min={1}
                            value={l.cantidad}
                            onChange={(e) =>
                              setCarrito((c) => actualizarCantidadCarrito(c, l.id, e.target.value))
                            }
                            style={{ width: 56, padding: "4px 6px", borderRadius: 6, border: "1px solid #A8C3DE" }}
                          />
                        </label>
                        <span style={{ fontWeight: 700 }}>{formatearSoles(l.total)}</span>
                        <button
                          type="button"
                          onClick={() => setCarrito((c) => quitarDelCarrito(c, l.id))}
                          style={{
                            marginLeft: "auto",
                            background: "none",
                            border: "none",
                            color: "#901638",
                            fontSize: 12,
                            fontWeight: 700,
                            cursor: "pointer",
                          }}
                        >
                          Quitar
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: 16, paddingTop: 12, borderTop: "2px solid #E3E8EE" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
                    <span>Subtotal</span>
                    <span>{formatearSoles(totales.subtotal)}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 8 }}>
                    <span>IGV (18%)</span>
                    <span>{formatearSoles(totales.igv)}</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: 18,
                      fontWeight: 800,
                      color: "#4434D4",
                    }}
                  >
                    <span>Total</span>
                    <span>{formatearSoles(totales.total)}</span>
                  </div>
                </div>

                <div style={{ marginTop: 16 }}>
                  <Btn disabled={!carrito.length} onClick={irAPago} style={{ width: "100%" }}>
                    Generar liquidación y cobrar
                  </Btn>
                </div>
              </section>
            </div>
          </>
        )}

        {paso === "pago" && (
          <section
            style={{
              background: "#fff",
              borderRadius: 14,
              border: "1px solid #E3E8EE",
              padding: "20px 22px",
              maxWidth: 720,
              margin: "0 auto",
            }}
          >
            <div className="no-print" style={{ marginBottom: 16 }}>
              <Btn variant="secondary" onClick={() => setPaso("atencion")}>
                ← Volver a editar
              </Btn>
            </div>

            <div className="solo-print">
              <h1 style={{ fontSize: 18 }}>Pre-liquidación de prestaciones</h1>
            </div>

            <p style={{ fontSize: 12, color: "#5B6B7D", margin: "0 0 4px" }}>Nº liquidación</p>
            <p style={{ fontSize: 20, fontWeight: 800, margin: "0 0 16px" }}>{referencia}</p>

            {dni && (
              <p style={{ margin: "0 0 4px" }}><strong>DNI:</strong> {dni}</p>
            )}
            {facturarA && (
              <p style={{ margin: "0 0 4px" }}><strong>Facturar a:</strong> {facturarA}</p>
            )}
            {paciente && (
              <p style={{ margin: "0 0 4px" }}><strong>Paciente:</strong> {paciente}</p>
            )}
            {pagare && (
              <p style={{ margin: "0 0 16px" }}><strong>Pagaré Nº:</strong> {pagare}</p>
            )}

            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginBottom: 16 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #0D253D", textAlign: "left" }}>
                  <th style={{ padding: "8px 4px" }}>Detalle</th>
                  <th style={{ padding: "8px 4px", width: 48 }}>Cant.</th>
                  <th style={{ padding: "8px 4px", textAlign: "right" }}>P.U.</th>
                  <th style={{ padding: "8px 4px", textAlign: "right" }}>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {carrito.map((l) => (
                  <tr key={l.id} style={{ borderBottom: "1px solid #E3E8EE" }}>
                    <td style={{ padding: "8px 4px" }}>{l.descripcion}</td>
                    <td style={{ padding: "8px 4px" }}>{l.cantidad}</td>
                    <td style={{ padding: "8px 4px", textAlign: "right" }}>{formatearSoles(l.unitTotal)}</td>
                    <td style={{ padding: "8px 4px", textAlign: "right" }}>{formatearSoles(l.total)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ textAlign: "right", marginBottom: 20 }}>
              <p style={{ margin: "4px 0" }}>Subtotal: {formatearSoles(totales.subtotal)}</p>
              <p style={{ margin: "4px 0" }}>IGV: {formatearSoles(totales.igv)}</p>
              <p style={{ margin: "8px 0 0", fontSize: 22, fontWeight: 800, color: "#4434D4" }}>
                Total a pagar: {formatearSoles(totales.total)}
              </p>
            </div>

            <div className="no-print" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <Btn variant="secondary" onClick={copiarLiquidacion}>
                {copiado ? "Copiado" : "Copiar detalle"}
              </Btn>
              <Btn variant="secondary" onClick={imprimir}>Imprimir</Btn>
              {!pagoConfirmado ? (
                <Btn variant="success" onClick={() => setPagoConfirmado(true)}>
                  Confirmar pago · {formatearSoles(totales.total)}
                </Btn>
              ) : (
                <span
                  style={{
                    padding: "12px 16px",
                    background: "#E3F3EF",
                    borderRadius: 10,
                    color: "#227A4A",
                    fontWeight: 700,
                    fontSize: 14,
                  }}
                >
                  Pago registrado — puede entregar comprobante al paciente
                </span>
              )}
            </div>

            <Btn
              variant="primary"
              style={{ marginTop: 16, width: "100%" }}
              onClick={() => {
                setCarrito([]);
                setPaso("atencion");
                setReferencia("");
                setPagoConfirmado(false);
                setDni("");
                setPaciente("");
                setFacturarA("");
                setPagare("");
                setDniError("");
                ultimoDniConsultado.current = "";
              }}
            >
              Nueva atención
            </Btn>
          </section>
        )}
      </main>
    </div>
  );
}
