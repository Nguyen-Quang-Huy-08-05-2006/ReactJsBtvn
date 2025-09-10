import { Suspense, lazy } from "react";
import Loading from "./Loading";

const LazyLoadComp = lazy(() => import("./LazyLoadComp"));

function App() {
  return (
    <div>
      <h1>Demo Lazy Loading</h1>
      <p>Kéo xuống để load component...</p>
      <div style={{ height: "100vh" }} />{" "}
      <Suspense fallback={<Loading />}>
        <LazyLoadComp />
      </Suspense>
    </div>
  );
}

export default App;
