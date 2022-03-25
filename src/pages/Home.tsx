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
          <H1 heading="Branding" />
        </Spacer>
        <div className=" h-fit bg-satBlack relative mt-4">
          <div className=" text-4xl p-5 font-TY ">
            <ul className=" text-offWhite">
              <li className=" mb-4 ">Digital assets creation</li>
              <li className=" mb-4 ">Consulting</li>
            </ul>
          </div>
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
        <div className=" h-16 bg-offWhite" />
        <Footer />
      </ImageProvider>
    </>
  );
};
