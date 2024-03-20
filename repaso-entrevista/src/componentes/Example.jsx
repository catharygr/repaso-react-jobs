import "./Example.css";
import { useState, useEffect } from "react";

export default function Example() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);

  async function promesa() {
    try {
      const response = await fetch("/data/data.json");
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    promesa();
  }, []);

  function handleClickIncrement() {
    setCount(count + 1);
  }

  function handleClickDecrement() {
    setCount(count - 1);
  }
  const mapeo = data.map((item) => {
    return (
      <div key={item.id}>
        <p>{item.name}</p>
        <p>{item.lastName}</p>
        <p>{item.age}</p>
      </div>
    );
  });

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
          Decrementar
        </button>
      </div>
      {mapeo}
    </div>
  );
}
