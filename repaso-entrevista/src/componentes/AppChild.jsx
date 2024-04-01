/* eslint-disable react/prop-types */
export default function AppChild({ count, incrementCount, clearCount }) {
  return (
    <>
      <button onClick={incrementCount}>
        Click me to increment count (current count: {count})
      </button>
      <button onClick={clearCount}>
        Click me to clear count (current count: {count})
      </button>
    </>
  );
}
