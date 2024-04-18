import React from "react";

export default function Resumen() {
  return (
    <div>
      <h1>Resumen</h1>
      <p>Resumiendo lo estudiado</p>
      <Counter />
    </div>
  );
}

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <p>Contador: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Incrementar
        </button>
      </div>
    );
  }
}
