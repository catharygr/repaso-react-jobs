import "./ComponentControlados.css";
import ComponenteUno from "./ComponenteUno";
import ComponenteDos from "./ComponenteDos";
import { useState } from "react";
export default function ComponentControlados() {
  const [sharedState, setShareState] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setShareState({
      ...sharedState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <ComponenteUno
        values={sharedState}
        handleChange={handleChange}
      />
      <ComponenteDos
        values={sharedState}
        handleChange={handleChange}
      />
    </div>
  );
}
