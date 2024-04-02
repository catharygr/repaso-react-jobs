import "./ComponentControlados.css";
export default function ComponentControlados() {
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
