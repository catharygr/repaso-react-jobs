export default function List() {
  const items = ["apple", "banana", "orange"];

  return (
    <ul className="lista">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
