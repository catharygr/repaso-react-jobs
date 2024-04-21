import Example from "./componentes/exemple/Example";
import Formulario from "./componentes/formulario/Formulario";
import List from "./componentes/lista/Lista";
import { useState, useRef } from "react";
import AppChild from "./componentes/appChild/AppChild";
import ComponentControlados from "./componentes/componentControlados/ComponentControlados";
import Counter from "./componentes/repaso de todo/Counter";
import Publicaciones from "./componentes/publicaciones/Publicaciones";
import ArrayComponente from "./componentes/arraycomponente/ArrayComponente";
import Resumen from "./componentes/resumen/Resumen";
import TextInput from "./componentes/imperativaHandle/TextInput";

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const contadorRef = useRef(null);
  const [IsFormularioVisible, setIsFormularioVisible] = useState(true);
  const [isResumenVisible, setIsResumenVisible] = useState(false);

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

  function toggleResumen() {
    setIsResumenVisible(!isResumenVisible);
  }

  return (
    <div className="container">
      {isResumenVisible ? (
        <>
          <Resumen />
          <TextInput />
        </>
      ) : (
        <>
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
        </>
      )}
      <button onClick={toggleResumen}>
        {isResumenVisible ? "Ocultar resumen" : "Mostrar resumen"}
      </button>
    </div>
  );
}

export default App;
