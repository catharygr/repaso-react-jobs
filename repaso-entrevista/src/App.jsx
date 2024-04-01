import "./App.css";
import Example from "./componentes/Example";
import Formulario from "./componentes/formulario/Formulario";
import List from "./componentes/lista/Lista";
import { useState, useEffect, useRef } from "react";
import AppChild from "./appChild/AppChild";

function App() {
  const [count, setCount] = useState(0);
  const contadorRef = useRef(null);

  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  const incrementCount = () => {
    // Si ya existe un intervalo, detenerlo
    if (contadorRef.current) {
      clearInterval(contadorRef.current);
    }

    contadorRef.current = setInterval(() => {
      setCount((currentCount) => currentCount + 1);
    }, 1000);
  };

  const clearCount = () => {
    clearInterval(contadorRef.current);
  };

  return (
    <div className="container">
      <Example />
      <Formulario />
      <List />
      <div>
        <AppChild
          count={count}
          incrementCount={incrementCount}
          clearCount={clearCount}
        />
      </div>
    </div>
  );
}

export default App;
