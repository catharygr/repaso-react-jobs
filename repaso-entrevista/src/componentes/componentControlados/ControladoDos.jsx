/* eslint-disable react/prop-types */
export default function ControladoDos({
  nombreRef,
  emailRef,
  passwordRef,
  handleSubmit,
}) {
  return (
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <label className="label">
        Nombre
        <input
          className="input-rojo"
          type="text"
          ref={nombreRef}
        />
      </label>
      <label className="label">
        Email
        <input
          className="input-rojo"
          type="email"
          ref={emailRef}
        />
      </label>
      <label className="label">
        Password
        <input
          className="input-rojo"
          type="password"
          ref={passwordRef}
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
