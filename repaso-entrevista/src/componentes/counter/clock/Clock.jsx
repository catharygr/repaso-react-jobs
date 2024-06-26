import { useEffect, useState } from "react";
export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="reloj">
      <h2>Reloj</h2>
      <p>La hora es: {time}</p>
    </div>
  );
}
