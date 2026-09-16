import { useEffect, useId, useRef, useState } from "react";

const inputStyle = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 10,
  border: "1px solid #A8C3DE",
  background: "#fff",
};

export default function AutocompleteCampo({
  label,
  value,
  onChange,
  placeholder,
  sugerencias = [],
  onSeleccionarSugerencia,
  renderSugerencia,
  disabled,
  hint,
  inputMode,
  maxLength,
  onBlurExtra,
}) {
  const [abierto, setAbierto] = useState(false);
  const [indice, setIndice] = useState(-1);
  const contenedorRef = useRef(null);
  const listId = useId();

  useEffect(() => {
    const onDoc = (e) => {
      if (!contenedorRef.current?.contains(e.target)) setAbierto(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const mostrarLista = abierto && sugerencias.length > 0 && !disabled;

  const elegir = (item) => {
    onSeleccionarSugerencia?.(item);
    setAbierto(false);
    setIndice(-1);
  };

  return (
    <label ref={contenedorRef} style={{ display: "block", marginBottom: 12, position: "relative" }}>
      <span style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#5B6B7D", marginBottom: 4 }}>
        {label}
      </span>
      <input
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        inputMode={inputMode}
        maxLength={maxLength}
        aria-autocomplete="list"
        aria-expanded={mostrarLista}
        aria-controls={mostrarLista ? listId : undefined}
        onChange={(e) => {
          onChange(e.target.value);
          setIndice(-1);
          setAbierto(true);
        }}
        onFocus={() => setAbierto(true)}
        onBlur={() => {
          onBlurExtra?.();
          setTimeout(() => setAbierto(false), 150);
        }}
        onKeyDown={(e) => {
          if (!sugerencias.length) return;
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setAbierto(true);
            setIndice((i) => Math.min(i + 1, sugerencias.length - 1));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setIndice((i) => Math.max(i - 1, 0));
          } else if (e.key === "Enter" && indice >= 0) {
            e.preventDefault();
            elegir(sugerencias[indice]);
          } else if (e.key === "Escape") {
            setAbierto(false);
          }
        }}
        style={inputStyle}
      />
      {hint && (
        <span style={{ display: "block", fontSize: 11, color: "#5B6B7D", marginTop: 4 }}>{hint}</span>
      )}
      {mostrarLista && (
        <ul
          id={listId}
          role="listbox"
          style={{
            position: "absolute",
            zIndex: 30,
            left: 0,
            right: 0,
            top: "100%",
            margin: "4px 0 0",
            padding: 0,
            listStyle: "none",
            background: "#fff",
            border: "1px solid #A8C3DE",
            borderRadius: 10,
            boxShadow: "0 8px 24px rgba(13,37,61,0.12)",
            maxHeight: 220,
            overflow: "auto",
          }}
        >
          {sugerencias.map((item, i) => (
            <li key={item.id ?? i} role="option" aria-selected={i === indice}>
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => elegir(item)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  border: "none",
                  background: i === indice ? "#EDEBFE" : "transparent",
                  padding: "10px 12px",
                  cursor: "pointer",
                  fontSize: 13,
                }}
              >
                {renderSugerencia ? renderSugerencia(item) : String(item)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </label>
  );
}
