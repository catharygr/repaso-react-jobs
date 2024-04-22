import PropTypes from "prop-types";
import "./AppChild.css";
export default function AppChild({ count, toggleCount, isRunning }) {
  const countDos = count + 1;
  return (
    <div className="container">
      <button
        className="btn"
        onClick={toggleCount}
      >
        {isRunning ? "Stop" : "Start"} count ( {countDos})
      </button>
    </div>
  );
}

AppChild.propTypes = {
  count: PropTypes.number.isRequired,
  toggleCount: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
};
