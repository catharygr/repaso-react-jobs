/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function ControladoUno({ sharedState, handleChange }) {
  const { nombre, email, password } = sharedState;
  return (
    <form className=" form">
      <label
        className="label"
        htmlFor="nombre"
      >
        Nombre
        <input
          className="input"
          type="text"
          name="nombre"
          value={sharedState}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        Email
        <input
          className="input"
          type="email"
          name="email"
          value={sharedState}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        Password
        <input
          className="input"
          type="password"
          name="password"
          value={sharedState}
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
