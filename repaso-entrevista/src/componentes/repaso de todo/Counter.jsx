import { useState } from "react";
import "./Counter.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

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
