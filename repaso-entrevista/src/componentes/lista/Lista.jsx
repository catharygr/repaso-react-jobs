import "./Lista.css";
import List from "./List";
export default function Lista() {
  const items = ["apple", "banana", "orange"];

  const listado = [
    { id: 1, name: "Juan" },
    { id: 2, name: "Pedro" },
    { id: 3, name: "Miguel" },
  ];

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
        <List listado={listado} />
      </ul>
    </div>
  );
}
