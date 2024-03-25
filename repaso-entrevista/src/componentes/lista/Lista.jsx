export default function List() {
  const items = ["apple", "banana", "orange"];

  items.push("kiwi");
  items.pop();
  items.shift();
  items.unshift("uva");

  return (
    <ul className="lista">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
