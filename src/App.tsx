import React from "react";
import "./styles/App.css";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Spacer, Heading, ImageGrid, Quotes } from "./components/elements";
import { Services } from "./components/services/Services";
import { NFTLAB } from "./components/services/NFTLAB";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <Spacer>
        <Heading>
          {/* <p>Design</p> */}
          <p>Web Apps</p>
          <p>Branding</p>
          {/* TODO: Aim at a better idea then DLD? NFTs web3 ? */}
          <p>NFTs</p>
        </Heading>
      </Spacer>
      <Hero />
      <Spacer>
        <Heading>
          <p className=" p-4 text-offBlack">Creative Approach</p>
        </Heading>
      </Spacer>
      <Services />
      <div className=" h-[5rem] bg-satBlack" />
      <ImageGrid />
      <Spacer>
        <Heading>
          <p className=" pt-8 text-offBlack">NFT LAB</p>
        </Heading>
      </Spacer>
      <NFTLAB />
      <div className=" h-[5rem] bg-satBlack" />
      <Quotes />
    </>
  );
};
