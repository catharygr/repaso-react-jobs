import { useState } from "react";
import "./Formulario.css";

export default function Formulario() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
  });
  const [modal, setModal] = useState(false);

  const manejarSubmit = (evento) => {
    evento.preventDefault();
    setForm({ nombre: "", email: "" });
    setModal(true);
  };

  return (
    <div className="container">
      <form onSubmit={manejarSubmit}>
        <label htmlFor="nombre">Nombre</label>
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
    </div>
  );
}
