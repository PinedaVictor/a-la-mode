import React from "react";
import { Hero, HeaderNav, Footer, News } from "../components";
import { H1, Heading, Quotes, ImageGrid, Spacer } from "../components/elements";
import { Services, NFTLAB } from "../components/office";

export const Home: React.FC = () => {
  return (
    <>
      <HeaderNav />
      <Heading>
        <p>Web Apps</p>
        <p>Branding</p>
        <p>NFTs</p>
      </Heading>
      <Hero />
      <Spacer>
        <H1 heading="Creative Approach" />
      </Spacer>
      <Services />
      <div className=" h-[5rem] bg-satBlack" />
      <ImageGrid />
      <Spacer>
        <H1 heading="NFT LAB" />
      </Spacer>
      <NFTLAB />
      <Spacer>
        <H1 heading="Latest News" />
      </Spacer>
      <News />
      <Quotes />
      <Footer />
    </>
  );
};
