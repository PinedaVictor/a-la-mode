import React from "react";
import { FooterSection } from "./FooterSection";
import { Link } from "react-router-dom";
import { ExternalLink } from "../atomic/atoms";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-wrap p-5 w-screen  font-SFR lg:w-3/4 m-auto  ">
      <FooterSection>
        <div className=" pt-10 md:float-right">
          <p className="  underline font-BN text-2xl">Social Media</p>
          <ul className=" leading-loose ">
            <ExternalLink link="https://www.linkedin.com/in/pinedavictor095/">
              <li>LinkedIn</li>
            </ExternalLink>
            <ExternalLink link="https://github.com/PinedaVictor">
              <li>Github</li>
            </ExternalLink>
          </ul>
        </div>
      </FooterSection>
      <FooterSection>
        <div className=" pt-10 md:float-right">
          <p className="  underline font-BN text-2xl">Site Links</p>
          <ul className=" leading-loose">
            <Link to="/">
              <li className=" ">Home</li>
            </Link>
            <Link to="/projects">
              <li className=" ">Projects</li>
            </Link>
            <Link to="/HappyClients">
              <li className=" ">References</li>
            </Link>
          </ul>
        </div>
      </FooterSection>
    </footer>
  );
};
