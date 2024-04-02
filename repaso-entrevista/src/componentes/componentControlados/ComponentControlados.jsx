import "./ComponentControlados.css";
import ComponenteUno from "./ComponenteUno";
import ComponenteDos from "./ComponenteDos";
import { useState } from "react";
export default function ComponentControlados() {
  const [values, setValues] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      nombre: "",
      email: "",
      password: "",
    });
    // console.log(values);
  };
  return (
    <form
      className=" form"
      onSubmit={handleSubmit}
    >
      <label
        className="label"
        htmlFor="nombre"
      >
        Nombre
        <input
          className="input"
          type="text"
          name="nombre"
          value={values.nombre}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        Email
        <input
          className="input"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        Password
        <input
          className="input"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <button
        className="btn"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
}
