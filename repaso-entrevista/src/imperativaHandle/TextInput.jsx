export default function TextInput({ props, ref }) {
  return (
    <input
      type="text"
      ref={ref}
      {...props}
    />
  );
}
