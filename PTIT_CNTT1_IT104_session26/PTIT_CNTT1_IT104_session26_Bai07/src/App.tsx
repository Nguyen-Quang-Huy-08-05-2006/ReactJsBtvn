import { Routes, Route } from "react-router-dom";
import Teams from "./pages/Teams";
import TeamsIndex from "./pages/TeamsIndex";
import Team from "./pages/Team";

function App() {
  return (
    <Routes>
      <Route path="/teams" element={<Teams />}>
        <Route index element={<TeamsIndex />} />

        <Route path=":teamId" element={<Team />} />
      </Route>
    </Routes>
  );
}

export default App;
