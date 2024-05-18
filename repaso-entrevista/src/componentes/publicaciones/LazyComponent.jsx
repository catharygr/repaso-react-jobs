import { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./Publicaciones"));

export function MyComponent() {
  return (
    <>
      <h2>Lazy Component</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </>
  );
}
export default LazyComponent;
