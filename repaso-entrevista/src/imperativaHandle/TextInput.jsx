/* eslint-disable react/prop-types */
import { useRef } from "react";

export default function TextInput({ props, ref }) {
  return (
    <input
      type="text"
      ref={ref}
      {...props}
    />
  );
}
