/* eslint-disable react/prop-types */
import React from "react";
import "./Resumen.css";

export default function Resumen() {
  return (
    <div className="resumen-container">
      <h2>Resumen</h2>
      <p>Resumiendo lo estudiado</p>
      <Counter />
      <Card title="Título del card">Contenido del card como children</Card>
      <Button text="Botón de prueba" />
      <Button text="Otro botón de prueba" />
    </div>
  );
}

// export class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   render() {
//     return (
//       <div>
//         <p>Contador: {this.state.count}</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Incrementar
//         </button>
//       </div>
//     );
//   }
// }

function Counter() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log("Se actualizó el contador");
  }, [count]);

  return (
    <div className="container-counter">
      <p>Contador: {count}</p>
      <div className="container-btn">
        <button
          className="btn"
          onClick={() => setCount(count + 1)}
        >
          Incrementar
        </button>
        <button
          className="btn"
          onClick={() => setCount(count - 1)}
        >
          Decrementar
        </button>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.children}</p>
    </div>
  );
}

function Button(props) {
  return <button>{props.text}</button>;
}
