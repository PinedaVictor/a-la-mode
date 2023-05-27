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
import { NFTLAB } from "../components/office";

export const Home: React.FC = () => {
  return (
    <>
      <ImageProvider>
        <FullScreenPreview />
        <HeaderNav />
        <Heading>
          <p>Mobile &</p>
          <p>Web Apps</p>
          <p>CLI Software</p>
        </Heading>
        <Hero />
        <Spacer>
          <div className="pl-5 pt-10">
            <H1 heading="Digital strategy" />
          </div>
        </Spacer>
        <div className=" h-fit relative mt-4">
          {/* TODO: Do not delete - leave for content copy */}
          {/* <div className=" text-4xl p-5 font-TY ">
            <ul className=" text-offBlack ">
              <li className=" mb-4 ">Digital strategy</li>
            </ul>
          </div> */}
        </div>
        <ImageGrid />
        <NFTLAB />

        <News />
        <Quotes />
        <div className=" h-16 bg-offWhite" />
        <Footer />
        <div className=" h-16 bg-offWhite" />
        <div className=" text-sm font-BN bg-orange text-center text-offWhite ">
          &copy; Dreamlike Digital. All Rights Reserved
        </div>
      </ImageProvider>
    </>
  );
};
