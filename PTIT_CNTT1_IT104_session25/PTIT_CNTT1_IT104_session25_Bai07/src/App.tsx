import { Routes, Route, Navigate } from "react-router-dom";
import CustomLink from "./components/CustomLink";
import HomePage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div>
      <CustomLink />

      <Routes>
        <Route path="/home-page" element={<HomePage />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/" element={<Navigate to="/home-page" />} />
      </Routes>
    </div>
  );
}

export default App;
