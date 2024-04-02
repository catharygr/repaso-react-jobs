export default function ControladoUno() {
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
