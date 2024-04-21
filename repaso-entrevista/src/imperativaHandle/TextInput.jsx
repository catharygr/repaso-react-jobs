/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./TextInput.css";

export default function TextInput(ref) {
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
