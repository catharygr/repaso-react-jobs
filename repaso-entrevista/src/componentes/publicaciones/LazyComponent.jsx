export function MyComponent() {
  function texto() {
    setTimeout(() => {
      return <h2>Lazy Component</h2>;
    }, 3000);
  }
  return <>{texto()}</>;
}
