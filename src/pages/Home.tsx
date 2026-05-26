import React from "react";
import vic from "../assets/images/vicgithub.jpg";
import { Hero, Footer } from "../components";
import { Link } from "@tanstack/react-router";
import { ExternalLink } from "../components/atomic/atoms";
import { Projects } from "../components/atomic/organisms/Projects";
import { SpacerSummary } from "../components/atomic/atoms/SpacerSummary";
import { PageWrapper } from "../components/atomic/templates/PageWrapper";
import { projectsConfig } from "../configs/projects";
import {
  H1,
  Heading,
  Quotes,
  ImageGrid,
  Spacer,
  FullScreenPreview,
  ImageProvider,
  Avatar
} from "../components/elements";
import { NFTLAB } from "../components/office";
import { ContactForm } from "../components/atomic/molecules/ContactForm";
import { NewsletterEmbed } from "../components/atomic/molecules/NewsletterEmbed";

export const Home: React.FC = () => {
  return (
    <ImageProvider>
      <FullScreenPreview />
      <PageWrapper>
        <Heading>
          <Avatar img={vic} imgAltText={"Victor Pineda avatar"} />
          <p>Hi, I'm Victor</p>
          <p className=" text-3xl">Creative Technologist</p>
        </Heading>
        <Hero />
        <Spacer>
          <div className="pl-5 pt-10">
            <H1 heading="Building" />
          </div>
        </Spacer>
        <Projects projects={projectsConfig.slice(0, 3)} />
        <div className="flex justify-end pr-8 font-TY underline">
          <Link to="/projects">
            <p>{"View All"}</p>
          </Link>
        </div>
        <Spacer>
          <div className="pl-5 pt-10">
            <H1 heading="Hobbies" />
          </div>
        </Spacer>
        <SpacerSummary>
          In my spare time I like to dedicate time to Graphic Arts, Wood
          Working, and persuing entrepreneurial ventures.
        </SpacerSummary>
        <ImageGrid />
        {/* TODO: Update NFTLAB to something more general */}
        <NFTLAB />
        <Spacer>
          <div className="pl-5 pt-10">
            <H1 heading="By Day" />
          </div>
        </Spacer>
        <SpacerSummary>
          {"Currently working with an amazing team over at "}
          <span className="underline text-orange font-bold">
            <ExternalLink link="https://buzzsolutions.co/">
              {"Buzz Solutions!"}
            </ExternalLink>
          </span>
          {" Building the latest AI tech for energy infrastructure for a sustainable future. "}
          <span className="underline text-orange font-bold">
            <ExternalLink link="https://buzzsolutions.co/blog/">
              {"Read all about it."}
            </ExternalLink>
          </span>
        </SpacerSummary>
        {/* TODO: Find a place for the News section */}
        {/* <News /> */}
        <Quotes />
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
