import React, { useState } from "react";
import { Hero, Drawer, Header, Footer } from "../components";
import { Spacer, Heading, Quotes, ImageGrid } from "../components/elements";
import { Services, NFTLAB } from "../components/office";

export const Home: React.FC = () => {
  const [menuOpen, toggleMenu] = useState(false);
  return (
    <>
      <Drawer isOpen={menuOpen} toggle={() => toggleMenu(!menuOpen)} />
      <Header toggle={() => toggleMenu(!menuOpen)} />
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
      <Footer />
    </>
  );
};
