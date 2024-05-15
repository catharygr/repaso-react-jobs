import { useEffect, useState } from "react";
import "./Counter.css";
import Clock from "../counter/clock/Clock";
import useCustomHook from "../../utildades/useCustomHook";

export default function Counter() {
  const { value, incrementValue, decrementValue } = useCustomHook();
  const [showClock, setShowClock] = useState(false);

  useEffect(() => {
    document.title = `Contador: ${value}`;
  }, [value]);

  const toggleClock = () => {
    setShowClock(!showClock);
  };

  return (
    <div className="container-counter-rosa">
      <p className="contador">Contador: {value}</p>
      <button
        className="btn-counter"
        onClick={() => incrementValue(value)}
      >
        Incrementar
      </button>
      <button
        className="btn-counter"
        onClick={() => decrementValue(value)}
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
