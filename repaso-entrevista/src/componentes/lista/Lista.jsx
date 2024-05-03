import "./Lista.css";
import List from "./List";
export default function Lista() {
  const items = ["apple", "banana", "orange"];

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
        <List />
      </ul>
    </div>
  );
}
