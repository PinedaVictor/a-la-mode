import React from "react";
import "./styles/App.css";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Spacer } from "./components/elements/spacers/Spacer";
import { Quote } from "./components/elements/spacers/Quote";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Spacer height="35rem">
        <Quote />
      </Spacer>
      <Hero />
      <div className=" h-[50rem] bg-offWhite"></div>
    </>
  );
};
