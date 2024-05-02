import { useState, useRef } from "react";
import Example from "./componentes/exemple/Example";
import Formulario from "./componentes/formulario/Formulario";
import List from "./componentes/lista/Lista";
import AppChild from "./componentes/appChild/AppChild";
import ComponentControlados from "./componentes/componentControlados/ComponentControlados";
import Counter from "./componentes/counter/Counter";
import Publicaciones from "./componentes/publicaciones/Publicaciones";
import ArrayComponente from "./componentes/arraycomponente/ArrayComponente";
import Resumen from "./componentes/repaso de todo/resumen/Resumen";
import TextInput from "./componentes/repaso de todo/imperativeHandle/TextInput";
import Button from "./componentes/button/Button";

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const contadorRef = useRef(null);
  const inputEl = useRef();
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

  const focusInput = () => {
    inputEl.current.focus();
  };

  return (
    <div className="container">
      {isResumenVisible ? (
        <>
          <Resumen />
          <TextInput ref={inputEl} />
          <button onClick={focusInput}>Enfocar el focus</button>
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
              <Button />
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
