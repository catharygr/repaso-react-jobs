export default function ControladoDos({ sharedState }) {
  const { nombre, email, password } = sharedState;
  return (
    <form>
      <label>
        Nombre
        <input type="text" />
      </label>
      <label>
        Email
        <input type="email" />
      </label>
      <label>
        Password
        <input type="password" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
