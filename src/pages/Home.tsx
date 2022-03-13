import React, { useState } from "react";
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
  // TODO: We will need to create context to pass image to our preview component
  const [c, setC] = useState(false);
  return (
    <>
      {/* <ImageProvider> */}
      <FullScreenPreview show={c} toggle={() => setC} />
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
          Original Photography
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
      <button onClick={() => setC(!c)}>YES</button>
      <Spacer>
        <H1 heading="Latest News" />
      </Spacer>
      <News />
      <Quotes />
      <Footer />
      {/* </ImageProvider> */}
    </>
  );
};
