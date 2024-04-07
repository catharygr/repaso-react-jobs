import { useEffect, useState } from "react";
import "./Counter.css";

// Simulamos un servicio que nos da un numero aleatorio cada segundos
const randomService = {};

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${counter}`;
  }, [counter]);

  return (
    <>
      <p>Contador: {counter}</p>
      <button
        className="btn-counter"
        onClick={() => setCounter(counter + 1)}
      >
        Incrementar
      </button>
    </>
  );
}
