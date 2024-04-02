import "./ComponentControlados.css";
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
    // console.log(values);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">
        Nombre
        <input
          type="text"
          name="nombre"
          value={values.nombre}
          onChange={handleChange}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
