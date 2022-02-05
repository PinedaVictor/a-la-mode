import React from "react";
import "./styles/App.css";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};
