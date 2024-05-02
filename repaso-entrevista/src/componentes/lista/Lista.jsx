import "./Lista.css";
export default function List({ item }) {
  const items = ["apple", "banana", "orange"];
  const item = { id: 1, name: "John Doe" };

  items.push("kiwi");
  items.pop();
  items.shift();
  items.unshift("uva");

  return (
    <div className="central">
      <ul className="lista">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {item.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
