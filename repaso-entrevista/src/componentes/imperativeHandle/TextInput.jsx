import { useRef, useImperativeHandle } from "react";
import "./TextInput.css";

export default function TextInput(props, reference) {
  const inputEl = useRef(null);

  useImperativeHandle(
    reference,
    () => ({
      focus: () => {
        inputEl.current.focus();
      },
    }),
    []
  );
  return (
    <input
      className="input-text"
      type="text"
      ref={inputEl}
      placeholder="Escribe algo..."
    />
  );
}
