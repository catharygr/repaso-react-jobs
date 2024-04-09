import { useEffect, useState } from "react";
export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  return (
    <div className="reloj">
      <h2>Reloj</h2>
      <p>La hora es: {time}</p>
    </div>
  );
}
