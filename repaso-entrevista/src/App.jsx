import "./App.css";
import Example from "./componentes/Example";
import Formulario from "./componentes/formulario/Formulario";
import List from "./componentes/lista/Lista";
import { useState, useEffect } from "react";
import AppChild from "./componentes/AppChild";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  });

  const incrementCount = () => {
    setCount(count + 1);
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
        />
      </div>
    </div>
  );
}

export default App;
