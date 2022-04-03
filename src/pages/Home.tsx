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
import { NFTLAB, Art } from "../components/office";

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
        <div className=" h-fit relative mt-4">
          <div className=" text-4xl p-5 font-TY ">
            <ul className=" text-offBlack ">
              <li className=" mb-4 ">Digital Assets Creation</li>
              <li className=" mb-4 ">Consulting</li>
            </ul>
          </div>
        </div>
        <ImageGrid />
        <NFTLAB />
        <News />
        <Quotes />
        <div className=" h-16 bg-offWhite" />
        <Footer />
      </ImageProvider>
    </>
  );
};
