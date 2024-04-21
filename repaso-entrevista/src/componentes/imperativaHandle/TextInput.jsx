import { useRef } from "react";
import "./TextInput.css";

export default function TextInput() {
  const inputEl = useRef(null);
  return (
    <input
      className="input-text"
      type="text"
      ref={inputEl}
      placeholder="Escribe algo..."
    />
  );
}
