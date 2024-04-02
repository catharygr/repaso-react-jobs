import "./ComponentControlados.css";
import ComponenteUno from "./ComponenteUno";
import ComponenteDos from "./ComponenteDos";
import { useState, useRef } from "react";
export default function ComponentControlados() {
  const [sharedState, setShareState] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const nombreRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleChange = (e) => {
    setShareState({
      ...sharedState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      nombre: nombreRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(values);
  };

  return (
    <div>
      <ComponenteUno
        sharedState={sharedState}
        handleChange={handleChange}
      />
      <ComponenteDos
        sharedState={sharedState}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
