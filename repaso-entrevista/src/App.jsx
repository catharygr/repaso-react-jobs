import "./App.css";
import Example from "./componentes/exemple/Example";
import Formulario from "./componentes/formulario/Formulario";
import List from "./componentes/lista/Lista";
import { useState, useRef } from "react";
import AppChild from "./componentes/appChild/AppChild";
import ComponentControlados from "./componentes/componentControlados/ComponentControlados";
import Counter from "./componentes/repaso de todo/Counter";
import Publicaciones from "./componentes/publicaciones/Publicaciones";
import ArrayComponente from "./componentes/arraycomponente/ArrayComponente";

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const contadorRef = useRef(null);
  const [IsFormularioVisible, setIsFormularioVisible] = useState(true);

  function toggleFormulario() {
    setIsFormularioVisible(!IsFormularioVisible);
  }
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
      <button onClick={toggleFormulario}>
        {IsFormularioVisible ? "Ocultar formulario" : "Mostrar formulario"}
      </button>
      {IsFormularioVisible ? (
        <>
          <Formulario />
          <Counter />
          <Publicaciones />
        </>
      ) : (
        <>
          <Example />
          <List />
          <div>
            <AppChild
              count={count}
              toggleCount={toggleCount}
              isRunning={isRunning}
            />
          </div>
          <ComponentControlados />
          <ArrayComponente />
        </>
      )}
    </div>
  );
}

export default App;
