/* eslint-disable react/prop-types */
export default function ControladoDos({
  nombreRef,
  emailRef,
  passwordRef,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre
        <input
          type="text"
          ref={nombreRef}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          ref={emailRef}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          ref={passwordRef}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
