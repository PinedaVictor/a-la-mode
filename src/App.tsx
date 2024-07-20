import "./styles/App.css";
import "../src/components/firebase/config";
import { type FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HappyClients, Home, ProjectsPage } from "./pages";

export const App: FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HappyClients" element={<HappyClients />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Router>
    </>
  );
};
