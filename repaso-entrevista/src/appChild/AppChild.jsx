/* eslint-disable react/prop-types */
export default function AppChild({ count, incrementCount, clearCount }) {
  return (
    <div className="container">
      <button
        className="btn"
        onClick={incrementCount}
      >
        Click me to increment count ( {count})
      </button>
      <button
        className="btn"
        onClick={clearCount}
      >
        Click me to clear count ( {count})
      </button>
    </div>
  );
}
