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
  Avatar,
} from "../components/elements";
import { NFTLAB } from "../components/office";

export const Home: React.FC = () => {
  return (
    <ImageProvider>
      <FullScreenPreview />
      <PageWrapper>
        <Heading>
          <Avatar img={vic} imgAltText={"Victor Pineda avatar"} />
          <p>Hi, I'm Victor</p>
          <p className=" text-3xl">Software Developer</p>
        </Heading>
        <Hero />
        {/* TODO: Update with new oppertunity */}
        {/* <Spacer>
          <div className="pl-5 pt-10">
            <H1 heading="Current Work" />
          </div>
        </Spacer>
        <SpacerSummary>
          {"Currenlty working as a Software Engineer at "}
          <span className=" underline text-orange font-bold">
            <ExternalLink link="https://engineeredinnovationgroup.com/">
              {"The Engineered Innovation Group."}
            </ExternalLink>
          </span>
          {" I collaberate across multiple teams tackling Front End and"}
          {" Backend End tasks. Happy client "}
          <span className=" underline text-orange font-bold">
            <ExternalLink link="https://engineeredinnovationgroup.com/work/#testimonials">
              {"testimonials."}
            </ExternalLink>
          </span>
        </SpacerSummary> */}
        <Spacer>
          <div className="pl-5 pt-10">
            <H1 heading="Projects" />
          </div>
        </Spacer>
        <Projects projects={projectsConfig.slice(0, 2)} />
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
        {/* TODO: Find a place for the News section */}
        {/* <News /> */}
        <Quotes />
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
