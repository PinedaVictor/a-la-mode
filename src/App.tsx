import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HappyClients, Home, WebApps, Pixels } from "./pages";

export const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/HappyClients" element={<HappyClients />} />
          <Route path="/WebApps" element={<WebApps />} />

          {/* <Route path="/Pixels" element={<Pixels />} /> */}
        </Routes>
      </Router>
    </>
  );
};
