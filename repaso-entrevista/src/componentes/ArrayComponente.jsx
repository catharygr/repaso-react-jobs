function ArrayComponent() {
  const originalArray = [1, 2, 3];
  const modifiedArray = [...originalArray, 4]; // Crear una nueva copia con el nuevo elemento

  return (
    <div>
      <h1>Array Original</h1>
      <ul>
        {originalArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h1>Array Modificado</h1>
      <ul>
        {modifiedArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayComponent;
