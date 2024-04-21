import { useRef, useImperativaHandle } from "react";
import "./TextInput.css";

export default function TextInput(referece) {
  const inputEl = useRef(null);

  useImperativaHandle(() => ({}), [inputEl]);
  return (
    <input
      className="input-text"
      type="text"
      ref={inputEl}
      placeholder="Escribe algo..."
    />
  );
}
