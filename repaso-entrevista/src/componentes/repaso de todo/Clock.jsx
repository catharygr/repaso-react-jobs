import { useState } from "react";
export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  return (
    <div>
      <h1>Reloj</h1>
      <p>La hora es: {new Date().toLocaleTimeString()}</p>
    </div>
  );
}
