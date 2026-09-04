import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ProblemsPage from "./pages/ProblemsPage";
import ProblemDetailsPage from "./pages/ProblemDetailsPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/problems" replace />} />
        <Route path="/problems" element={<ProblemsPage />} />
        <Route path="/problems/:id" element={<ProblemDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;