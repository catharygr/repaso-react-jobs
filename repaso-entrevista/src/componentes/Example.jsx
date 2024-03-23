import "./Example.css";
import { useState, useEffect } from "react";

export default function Example() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  async function promesa() {
    try {
      const response = await fetch("/data/data.json");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const data = await response.json();
      setData(data);
      setCargando(false);
    } catch (error) {
      setError(error);
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
      <div
        className="fetchcontainer"
        key={item.id}
      >
        <p>{item.name}</p>
        <p>{item.lastName}</p>
        <p>{item.age}</p>
      </div>
    );
  });

  return (
    <div className="container">
      <h1>Examples</h1>
      {cargando && <p>Cargando...</p>}
      {error && <p>Error</p>}

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
