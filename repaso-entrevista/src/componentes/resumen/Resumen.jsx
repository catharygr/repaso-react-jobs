import React from "react";
import "./Resumen.css";

export default function Resumen() {
  return (
    <div className="resumen-container">
      <h2>Resumen</h2>
      <p>Resumiendo lo estudiado</p>
      <Counter />
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
  return (
    <div className="container-counter">
      <p>Contador: {count}</p>
      <div className="btn-counter">
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
        <button onClick={() => setCount(count - 1)}>Decrementar</button>
      </div>
    </div>
  );
}
