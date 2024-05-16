/* eslint-disable react/prop-types */
import React from "react";
import "./Resumen.css";
import CuentaAtras from "../CuentaAtras";
import useCustomHook from "../../../utildades/useCustomHook";

export default function Resumen() {
  return (
    <div className="resumen-container">
      <h2>Resumen</h2>
      <p>Resumiendo lo estudiado</p>
      <Counter />
      <Card title="Título del card">
        <li>Menu</li>
        <li>Elemento</li>
        <li>Item</li>
      </Card>

      <Button text="Botón de prueba" />
      <Button text="Otro botón de prueba" />
      <CuentaAtras valorInicial={5} />
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
  const [value, incrementValue, decrementValue] = useCustomHook();
  // const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // console.log("Se actualizó el contador");
    console.log("El componente se montó");
  }, []);

  return (
    <div className="container-counter">
      <p>Contador: {value}</p>
      <p>Abre la consola y re-dimensiona la ventana</p>
      <div className="container-btn">
        <button
          className="btn"
          onClick={() => incrementValue(value)}
        >
          Incrementar
        </button>
        <button
          className="btn"
          onClick={() => decrementValue(value)}
        >
          Decrementar
        </button>
      </div>
    </div>
  );
}

function Card({ children }) {
  return (
    <>
      <ul>{children}</ul>
    </>
  );
}

function Button(props) {
  return <button className="btn-componente">{props.text}</button>;
}
