import "./App.css";
import Example from "./componentes/Example";
import Formulario from "./componentes/formulario/Formulario";
import List from "./componentes/lista/Lista";

function App() {
  return (
    <div className="container">
      <Example />
      <Formulario />
      <List />
    </div>
  );
}

export default App;
