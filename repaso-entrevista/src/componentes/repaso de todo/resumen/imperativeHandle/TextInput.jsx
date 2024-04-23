import {
  useRef,
  useImperativeHandle,
  forwardRef,
  useState,
  createElement,
} from "react";
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

  function MiElemento() {
    return createElement("h2", null, "Texto de ejemplo");
  }

  return (
    <>
      <MiElemento />

      <form onSubmit={handleSubmit}>
        <input
          className="input-text"
          type="text"
          ref={inputEl}
          placeholder="Escribe algo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="input-button"
        >
          Enviar
        </button>
      </form>
    </>
  );
});

TextInput.displayName = "TextInput";

export default TextInput;
