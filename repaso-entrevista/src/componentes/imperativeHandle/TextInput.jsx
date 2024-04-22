import { useRef, useImperativeHandle, forwardRef } from "react";
import "./TextInput.css";

const TextInput = forwardRef((props, ref) => {
  const inputEl = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputEl.current.focus();
    },
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputEl.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-text"
        type="text"
        ref={inputEl}
        placeholder="Escribe algo..."
      />
    </form>
  );
});

TextInput.displayName = "TextInput";

export default TextInput;
