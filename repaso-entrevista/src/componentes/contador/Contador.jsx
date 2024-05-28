import React from "react";

export default function Contador() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <p>You have clicked {count} times.</p>
      <button
        onClick={() => {
          const nextCount = count + 1;
          console.log(nextCount);

          setCount(nextCount);
        }}
      >
        Click me!
      </button>
    </>
  );
}
