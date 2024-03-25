import { useState } from "react";

export default function useCustomHook(initialValue) {
  const [value, setValue] = useState(initialValue);

  const incrementValue = () => setValue(value + 1);
  const decrementValue = () => setValue(value - 1);

  return value, incrementValue, decrementValue;
}
