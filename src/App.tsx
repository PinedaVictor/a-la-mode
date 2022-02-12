import React from "react";
import "./styles/App.css";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Spacer } from "./components/elements/spacers/Spacer";
import { Quote } from "./components/elements/spacers/Quote";
import { Services } from "./components/services/Services";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Spacer height="30rem">
        <Quote>
          <p>Design</p>
          <p>Web Apps</p>
          <p>Branding</p>
          {/* TODO: Aim at a better idea then DLD? NFTs web3 ? */}
          <p>NFTs</p>
        </Quote>
      </Spacer>
      <Hero />
      <Services />
      <div className=" h-[50rem] bg-offWhite"></div>
    </>
  );
};
