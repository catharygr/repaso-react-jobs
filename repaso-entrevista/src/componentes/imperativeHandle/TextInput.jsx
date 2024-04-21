import { useRef, useImperativeHandle, forwardRef } from "react";
import "./TextInput.css";

const TextInput = forwardRef((props, reference) => {
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
});

export default TextInput;
