/* eslint-disable react/prop-types */
export default function Button({ id, text, onClick }) {
  return (
    <button
      className="btn-button"
      onClick={() => onClick(id)}
    >
      {text}
    </button>
  );
}
