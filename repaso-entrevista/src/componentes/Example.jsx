import "./Example.css";
import { useState } from "react";

export default function Example() {
  const [count, setCount] = useState(0);

  function handleClickIncrement() {
    setCount(count + 1);
  }

  function handleClickDecrement() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>Examples</h1>

      <div className="btn-p">
        <p>Click {count} time</p>
        <button
          className="btn"
          onClick={handleClickIncrement}
        >
          Incremetar
        </button>
        <button
          className="btn"
          onClick={handleClickDecrement}
        >
          Decreamentar
        </button>
      </div>
    </div>
  );
}
