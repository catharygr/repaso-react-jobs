import { useEffect, useState } from "react";
import "./Counter.css";

// Simulamos un servicio que nos da un numero aleatorio cada segundos
const randomService = {
  subscribe: (callback) => {
    return setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 100);
      callback(randomNumber);
    }, 1000);
  },
  unsubscribe: (id) => {
    clearInterval(id);
  },
};

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const handleNewRandomNumber = (newNumber) => {};
  }, []);

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
