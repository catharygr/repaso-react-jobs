import { useState, useRef, useContext } from "react";
import "./Formulario.css";
import { ThemeContext } from "../../utildades/ThemeContext";

export default function Formulario() {
  const { theme, setTheme } = useContext(ThemeContext);

  const [form, setForm] = useState({
    nombre: "",
    email: "",
  });
  const [modal, setModal] = useState(false);
  const inputRef = useRef(null);

  const manejarSubmit = (evento) => {
    evento.preventDefault();
    setForm({ nombre: "", email: "" });
    setModal(true);
  };

  const handleClickFocus = () => {
    inputRef.current.focus();
  };

  let miBoton = useRef(null);
  let miConstante = useRef("mi constante");
  // let miConstante = "mi constante";
  console.log(miConstante);

  function handleMiConstante() {
    miConstante.current = "Mi pendejo";
    console.log(miConstante);
  }

  return (
    <>
      <div className="container">
        <form onSubmit={manejarSubmit}>
          <label
            ref={miBoton}
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            className="input"
            type="text"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          />
          <label htmlFor="email">Email</label>
          <input
            className="input"
            type="email"
            ref={inputRef}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <button
            className="btn"
            type="submit"
          >
            Enviar
          </button>
        </form>
        {modal && (
          <div className="modal">
            <p>Formulario enviado</p>
            <button
              className="btn-modal"
              onClick={() => setModal(false)}
            >
              Cerrar
            </button>
          </div>
        )}
        <button
          className="btn-focus"
          onClick={handleClickFocus}
        >
          Focus
        </button>
      </div>
      <div>
        <p className={theme}>{theme}</p>
        <button
          className="btn-theme"
          onClick={() =>
            setTheme(theme === "modo-claro" ? "modo-oscuro" : "modo-claro")
          }
        >
          Cambiar tema
        </button>
      </div>
      <div>
        <p>{miConstante.current}</p>
        <button onClick={handleMiConstante}>Cambiar mi constante</button>
      </div>
    </>
  );
}
