import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

export default function MyComponent() {
  return (
    <div>
      <h2>Lazy Component</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
