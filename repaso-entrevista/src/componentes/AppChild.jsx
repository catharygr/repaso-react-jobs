/* eslint-disable react/prop-types */
export default function AppChild({ count, incrementCount }) {
  return (
    <button onClick={incrementCount}>
      Click me to increment count (current count: {count})
    </button>
  );
}
