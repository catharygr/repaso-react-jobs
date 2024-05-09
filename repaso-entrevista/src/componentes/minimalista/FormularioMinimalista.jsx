import VisuallyHidden from "../../utildades/VisualHidden";

export default function FormularioMinimalista() {
  return (
    <form
      style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}
    >
      <label htmlFor="nombre">
        <VisuallyHidden>Nombre</VisuallyHidden>
        <input
          id="nombre"
          type="text"
          placeholder="Nombre"
          style={{ margin: "10px 0", padding: "10px" }}
        />
      </label>
      <label htmlFor="email">
        <VisuallyHidden>Email</VisuallyHidden>
        <input
          id="email"
          type="email"
          placeholder="Email"
          style={{ margin: "10px 0", padding: "10px" }}
        />
      </label>
      <button
        type="submit"
        style={{ padding: "10px", marginTop: "10px" }}
      >
        Enviar
      </button>
    </form>
  );
}
