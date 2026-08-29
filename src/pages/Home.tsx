import React from "react";
import { Footer } from "../components";
import { SplitImageCarousel } from "../components/elements/pixels/SplitImageCarousel";
import { HeroIntro } from "../components/hero/HeroIntro";
import { ExternalLink } from "../components/atomic/atoms";
import { SpacerSummary } from "../components/atomic/atoms/SpacerSummary";
import { PageWrapper } from "../components/atomic/templates/PageWrapper";
import {
  H1,
  ImageGrid,
  Spacer,
  FullScreenPreview,
  ImageProvider
} from "../components/elements";
import { NFTLAB } from "../components/office";
// import { NewsletterEmbed } from "../components/atomic/molecules/NewsletterEmbed";
import { Announcements } from "../components/atomic/organisms/Announcements";
import notFinishedGif from "../assets/images/gyfys/giphy.webp";

export const Home: React.FC = () => {
  return (
    <ImageProvider>
      <FullScreenPreview />
      <PageWrapper>
        <div className="flex flex-col lg:flex-row w-full">
          <div className="relative w-full lg:w-1/2">
            <div className="aspect-[1080/1350] lg:aspect-[9/10] w-full pt-0 pb-16 px-16 lg:pt-0 lg:pb-8 lg:pl-16 lg:pr-8">
              <SplitImageCarousel />
            </div>
            <HeroIntro />
          </div>
          <div className="w-full lg:w-1/2">
            <Announcements />
          </div>
        </div>
        <Spacer>
          <div className="pl-5 pt-10">
            <H1 heading="side b" />
          </div>
        </Spacer>
        <SpacerSummary>
          {
            "Building software, traveling, art, and woodworking. Documenting all of it on "
          }
          <span className="underline text-orange font-bold">
            <ExternalLink link="https://www.youtube.com/@vicblvd">
              {"YouTube."}
            </ExternalLink>
          </span>
        </SpacerSummary>
        <ImageGrid />
        {/* TODO: Update NFTLAB to something more general */}
        <NFTLAB />
        {/* TODO: Find a place for the News section */}
        {/* <News /> */}
        {/* <div className="mx-auto w-full max-w-lg">
          <NewsletterEmbed />
        </div> */}
        <div className="mx-auto w-full max-w-lg pt-10 pb-10 text-center">
          <p className="font-BN text-3xl mb-4">Newsletter:</p>
          <img
            src={notFinishedGif}
            alt="We're not finished yet"
            className="mx-auto rounded-md w-48"
          />
        </div>
        <div className=" h-16 bg-offWhite" />
        <Footer />
        <div className=" h-16 bg-offWhite" />
        <div className=" text-sm font-BN bg-orange text-center text-offWhite ">
          &copy; Dreamlike Digital. All Rights Reserved
        </div>
      </PageWrapper>
    </ImageProvider>
  );
};
