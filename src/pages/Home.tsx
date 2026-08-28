import React from "react";
import vic from "../assets/images/vicgithub.jpg";
import { Footer } from "../components";
import { SplitImageCarousel } from "../components/elements/pixels/SplitImageCarousel";
import { ExternalLink } from "../components/atomic/atoms";
import { SpacerSummary } from "../components/atomic/atoms/SpacerSummary";
import { PageWrapper } from "../components/atomic/templates/PageWrapper";
import {
  H1,
  Heading,
  ImageGrid,
  Spacer,
  FullScreenPreview,
  ImageProvider,
  Avatar
} from "../components/elements";
import { NFTLAB } from "../components/office";
import { ContactForm } from "../components/atomic/molecules/ContactForm";
import { NewsletterEmbed } from "../components/atomic/molecules/NewsletterEmbed";
import { Announcements } from "../components/atomic/organisms/Announcements";

export const Home: React.FC = () => {
  return (
    <ImageProvider>
      <FullScreenPreview />
      <PageWrapper>
        <Heading>
          {/* <p className="flex items-end">
            hi, I'm Victor
            <Avatar img={vic} imgAltText={"Victor Pineda avatar"} />
          </p> */}
          <p>hi, I'm Victor</p>
          <p className=" text-3xl">
            {"dev, art, travel, "}
            <span className="underline text-orange font-bold">
              <ExternalLink link="https://buymeacoffee.com/victorpineda">
                coffee?
              </ExternalLink>
            </span>
          </p>
        </Heading>
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full h-[60vh] md:h-screen md:w-1/2">
            <SplitImageCarousel />
          </div>
          <div className="w-full md:h-screen md:w-1/2">
            <Announcements />
          </div>
        </div>
        <Spacer>
          <div className="pl-5 pt-10">
            <H1 heading="side b" />
          </div>
        </Spacer>
        <SpacerSummary>
          {"Building software, traveling, graphic arts, and woodworking. Documenting all of it on "}
          <span className="underline text-orange font-bold">
            <ExternalLink link="https://www.youtube.com/@vicblvd">
              {"YouTube."}
            </ExternalLink>
          </span>
        </SpacerSummary>
        <ImageGrid />
        {/* TODO: Update NFTLAB to something more general */}
        <NFTLAB />
        <Spacer>
          <div className="pl-5 pt-10">
            <H1 heading="by day" />
          </div>
        </Spacer>
        <SpacerSummary>
          {"Currently working with an amazing team over at "}
          <span className="underline text-orange font-bold">
            <ExternalLink link="https://buzzsolutions.co/">
              {"Buzz Solutions!"}
            </ExternalLink>
          </span>
          {
            " Building the latest AI tech for energy infrastructure for a sustainable future. "
          }
          <span className="underline text-orange font-bold">
            <ExternalLink link="https://buzzsolutions.co/blog/">
              {"Read all about it."}
            </ExternalLink>
          </span>
        </SpacerSummary>
        {/* TODO: Find a place for the News section */}
        {/* <News /> */}
        <div className="px-5 pt-10 pb-10 max-w-lg mx-auto">
          <ContactForm />
        </div>
        <div className="mx-auto w-full max-w-lg">
          <NewsletterEmbed />
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
