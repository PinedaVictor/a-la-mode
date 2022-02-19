import React from "react";
import "./styles/App.css";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Spacer } from "./components/elements/spacers/Spacer";
import { Quote } from "./components/elements/spacers/Quote";
import { Services } from "./components/services/Services";
import { ImageGrid } from "./components/elements/pixels/ImageGrid";
import { NFTLAB } from "./components/services/NFTLAB";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Spacer height="30rem">
        <Quote>
          {/* <p>Design</p> */}
          <p>Web Apps</p>
          <p>Branding</p>
          {/* TODO: Aim at a better idea then DLD? NFTs web3 ? */}
          <p>NFTs</p>
        </Quote>
      </Spacer>
      <Hero />
      <Spacer height="2rem">
        <Quote>
          <p className=" p-5 text-offBlack">Creative Approach</p>
        </Quote>
      </Spacer>
      <Services />
      <div className=" h-[5rem] bg-satBlack" />
      <ImageGrid />
      <Spacer height="1rem">
        <Quote>
          <p className=" p-5 text-offBlack">NFT LAB</p>
        </Quote>
      </Spacer>
      <NFTLAB />
    </>
  );
};
