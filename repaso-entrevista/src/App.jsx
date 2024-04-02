import "./App.css";
import Example from "./componentes/Example";
import Formulario from "./componentes/formulario/Formulario";
import List from "./componentes/lista/Lista";
import { useState, useEffect, useRef } from "react";
import AppChild from "./appChild/AppChild";

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const contadorRef = useRef(null);

  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  const toggleCount = () => {
    if (isRunning) {
      clearInterval(contadorRef.current);
      contadorRef.current = null;
      setIsRunning(false);
    } else {
      contadorRef.current = setInterval(() => {
        setCount((currentCount) => currentCount + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  return (
    <div className="container">
      <Example />
      <Formulario />
      <List />
      <div>
        <AppChild
          count={count}
          toggleCount={toggleCount}
          isRunning={isRunning}
        />
      </div>
    </div>
  );
}

export default App;
