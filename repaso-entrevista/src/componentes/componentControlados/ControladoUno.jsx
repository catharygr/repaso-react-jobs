/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function ControladoUno({ sharedState, handleChange }) {
  return (
    <form className=" form">
      <label
        className="label"
        htmlFor="nombre"
      >
        Nombre
        <input
          className="input-azul"
          type="text"
          name="nombre"
          value={sharedState.nombre}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        Email
        <input
          className="input-azul"
          type="email"
          name="email"
          value={sharedState.email}
          onChange={handleChange}
        />
      </label>
      <label className="label">
        Password
        <input
          className="input-azul"
          type="password"
          name="password"
          value={sharedState.password}
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
