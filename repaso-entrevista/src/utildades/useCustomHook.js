import { useState } from "react";

export default function useCustomHook() {
  const [value, setValue] = useState(0);

  const incrementValue = () => setValue(value + 1);
  const decrementValue = () => setValue(value - 1);

  return { value, incrementValue, decrementValue };
}
