import "./Example.css";
import { useState, useEffect } from "react";
import useCustomHook from "../utildades/useCustomHook";

export default function Example() {
  const { value, incrementValue, decrementValue } = useCustomHook();
  console.log(value);
  const [data, setData] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
    promesa();
  }, []);
  const mapeo = data.map((item) => {
    if (item.age < 25 || item.age > 27) {
      return null;
    }
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
        <p>
          Click {""}
          {value} {""}time
        </p>
        <button
          className="btn"
          onClick={incrementValue}
        >
          Incremetar
        </button>
        <button
          className="btn"
          onClick={decrementValue}
        >
          Decrementar
        </button>
      </div>
      {mapeo}
    </div>
  );
}
