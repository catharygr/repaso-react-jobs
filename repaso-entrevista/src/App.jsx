import "./App.css";
import Example from "./componentes/Example";
import Formulario from "./componentes/formulario/Formulario";
import List from "./componentes/lista/Lista";
import { useState, useEffect, useRef } from "react";
import AppChild from "./componentes/AppChild";

function App() {
  const [count, setCount] = useState(0);
  const contadorRef = useRef(null);

  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  const incrementCount = () => {
    contadorRef.current = setInterval(() => {
      setCount(count + 1);
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
        <p>Count: {count}</p>
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
