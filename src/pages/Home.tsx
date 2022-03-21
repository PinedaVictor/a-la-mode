import React from "react";
import { Hero, HeaderNav, Footer, News } from "../components";
import {
  H1,
  Heading,
  Quotes,
  ImageGrid,
  Spacer,
  FullScreenPreview,
  ImageProvider,
} from "../components/elements";
import { Services, NFTLAB, Art } from "../components/office";

export const Home: React.FC = () => {
  return (
    <>
      <ImageProvider>
        <FullScreenPreview />
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
        <div className=" h-[5rem] bg-satBlack relative">
          <p className=" text-offWhite absolute pl-5 pb-2 bottom-0 font-[Tommy] text-2xl">
            {"Design"}
          </p>
        </div>
        <ImageGrid />
        <Spacer>
          <H1 heading="NFT LAB" />
        </Spacer>
        <NFTLAB />
        <div className=" h-[5rem] bg-satBlack relative">
          <p className=" text-offWhite absolute pl-5 pb-2 bottom-0 font-[Tommy] text-2xl">
            Original Art
          </p>
        </div>
        <Art />
        <Spacer>
          <H1 heading="Latest News" />
        </Spacer>
        <News />
        <Quotes />
        <Footer />
      </ImageProvider>
    </>
  );
};
