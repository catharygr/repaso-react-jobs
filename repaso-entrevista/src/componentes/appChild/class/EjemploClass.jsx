import { Component } from "react";

export default class Ejemplo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: "Hola componente de clase",
    };
  }

  render() {
    return <p style={{ color: "red" }}>{this.state.mensaje}</p>;
  }
}
