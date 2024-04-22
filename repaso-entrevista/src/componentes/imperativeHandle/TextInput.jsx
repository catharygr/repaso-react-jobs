import { useRef, useImperativeHandle, forwardRef, useState } from "react";
import "./TextInput.css";

const TextInput = forwardRef((props, ref) => {
  const [inputValue, setInputValue] = useState("");
  const inputEl = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputEl.current.focus();
    },
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(inputEl.current.value);
    setInputValue("");
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
