import { Component } from "react";

export default class Ejemplo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: "Hola componente",
    };
  }

  render() {
    return <p>{this.state.mensaje}</p>;
  }
}
