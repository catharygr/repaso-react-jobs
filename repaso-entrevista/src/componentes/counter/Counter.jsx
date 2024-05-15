import { useEffect, useState } from "react";
import "./Counter.css";
import Clock from "../counter/clock/Clock";
import useCustomHook from "../../utildades/useCustomHook";

export default function Counter() {
  // const [counter, setCounter] = useState(0);
  const { value, incrementValue, decrementValue } = useCustomHook();
  const [showClock, setShowClock] = useState(false);

  useEffect(() => {
    document.title = `Contador: ${counter}`;
  }, [counter]);

  const toggleClock = () => {
    setShowClock(!showClock);
  };

  return (
    <div className="container-counter-rosa">
      <p className="contador">Contador: {counter}</p>
      <button
        className="btn-counter"
        onClick={() => setCounter(counter + 1)}
      >
        Incrementar
      </button>
      <button
        className="btn-counter"
        onClick={() => setCounter(counter - 1)}
      >
        Decrementar
      </button>
      <button
        className="btn-reloj"
        onClick={toggleClock}
      >
        {showClock ? "Ocultar reloj" : "Mostrar reloj"}
      </button>
      {showClock && <Clock />}
    </div>
  );
}
