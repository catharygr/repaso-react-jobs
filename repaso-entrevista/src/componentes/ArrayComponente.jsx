import { useState } from "react";

function ArrayLista() {
  const [lista, setLista] = useState(["Mango", "Pera", "Uva"]);
  const [nuevoElemento, setNuevoElemento] = useState("");

  const agregarElemento = () => {
    setLista((prevLista) => [...prevLista, nuevoElemento]);
    setNuevoElemento("");
  };

  return (
    <div>
      <h2>Lista</h2>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        value={nuevoElemento}
        onChange={handleChange}
      />
      <button onClick={agregarElemento}>Agregar elemento</button>
    </div>
  );
}

export default ArrayLista;
