/* eslint-disable react/prop-types */
import "./AppChild.css";
export default function AppChild({ count, toggleCount, isRunning }) {
  return (
    <div className="container">
      <button
        className="btn"
        onClick={toggleCount}
      >
        {isRunning ? "Stop" : "Start"} count ( {count})
      </button>
    </div>
  );
}
