import { useState } from "react";
import "./Formulario.css";

export default function Formulario() {
  const [nombre, setNombre] = useState("");

  const manejarSubmit = (evento) => {
    evento.preventDefault();
    console.log(nombre);
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        className="input"
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
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
