import React from "react";
import vic from "../assets/images/vicgithub.jpg";
import { Hero, HeaderNav, Footer, News } from "../components";
import { ExternalLink } from "../components/atomic/atoms";
import { Projects } from "../components/atomic/organisms/Projects";
import {
  H1,
  Heading,
  Quotes,
  ImageGrid,
  Spacer,
  FullScreenPreview,
  ImageProvider,
  Pitch,
  Avatar,
} from "../components/elements";
import { NFTLAB } from "../components/office";

export const Home: React.FC = () => {
  return (
    <>
      <ImageProvider>
        <FullScreenPreview />
        <HeaderNav />
        <Heading>
          <Avatar img={vic} imgAltText={"Victor Pineda avatar"} />
          <p>Hi, I'm Victor</p>
          <p className=" text-3xl">Software Developer</p>
          {/* <p className=" text-2xl font-SFR p-2">
            I'm a Sofware Engineer who is passinate about problem solving, and
            creative thinking. I love working on Software inside the office and
            outside it. building Node based Web & Mobile Apps.
          </p> */}
        </Heading>
        <Hero />
        <Spacer>
          <div className="pl-5 pt-10">
            <H1 heading="Current Work" />
          </div>
        </Spacer>
        <div className=" h-fit relative mt-4 pl-2 pr-2 pb-4">
          <p className=" ml-4 text-2xl font-SFR">
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
            <p></p>
          </p>
        </div>
        <Spacer>
          <div className="pl-5 pt-10">
            <H1 heading="Projects" />
          </div>
        </Spacer>
        <Projects />
        <Spacer>
          <div className="pl-5 pt-10">
            <H1 heading="Hobbies" />
          </div>
        </Spacer>
        <ImageGrid />
        <NFTLAB />

        {/* <News /> */}
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
