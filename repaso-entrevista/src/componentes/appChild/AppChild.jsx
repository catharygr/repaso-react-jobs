import PropTypes from "prop-types";
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

AppChild.propTypes = {
  count: PropTypes.number.isRequired,
  toggleCount: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
};
