import { useEffect, useState } from "react";
import "./Counter.css";
import Clock from "../counter/clock/Clock";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [showClock, setShowClock] = useState(false);

  useEffect(() => {
    document.title = `Contador: ${counter}`;
  }, [counter]);

  const toggleClock = () => {
    setShowClock(!showClock);
  };

  return (
    <>
      <p>Contador: {counter}</p>
      <button
        className="btn-counter"
        onClick={() => setCounter(counter + 1)}
      >
        Incrementar
      </button>

      {showClock && <Clock />}
    </>
  );
}
