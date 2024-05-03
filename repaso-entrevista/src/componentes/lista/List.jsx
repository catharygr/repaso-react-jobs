/* eslint-disable react/prop-types */
export default function List({ listado }) {
  return (
    <ul>
      {listado.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
