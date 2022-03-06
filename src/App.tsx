import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HappyClients, Home } from "./pages";

export const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HappyClients" element={<HappyClients />} />
        </Routes>
      </Router>
    </>
  );
};
