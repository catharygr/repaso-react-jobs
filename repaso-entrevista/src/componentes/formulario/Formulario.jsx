import { useState } from "react";
import "./Formulario.css";

export default function Formulario() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
  });

  const manejarSubmit = (evento) => {
    evento.preventDefault();
    setForm({ nombre: "", email: "" });
  };

  return (
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
  );
}
