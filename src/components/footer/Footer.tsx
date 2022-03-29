import React from "react";
import { FooterSection } from "./FooterSection";
import { Pitch } from "../elements";
import { Link } from "react-router-dom";
import { ExternalLink } from "../utils";

export const Footer: React.FC = () => {
  const pitch =
    "My name is Victor Pineda. Here to help you with your brand, NFT" +
    "colleciton, and front-end development. I have a creative mind and ready";
  "to work towards creative solutions that help you reach your goals. Feel" +
    "free to contact me at any of my socials or let's chat over email" +
    "pinedavictor095@gmail.com";

  const intro = "Hi,👋";
  return (
    <footer className="flex flex-wrap p-5 grid-cols-3 font-SFR">
      <FooterSection>
        <Pitch intro={intro} pitch={pitch} />
      </FooterSection>
      <FooterSection>
        <ul className=" leading-loose">
          <ExternalLink link="https://twitter.com/victorcodez">
            <li>Twitter</li>
          </ExternalLink>
          <ExternalLink link="https://instagram.com/graphicabyvic?utm_medium=copy_link">
            <li>Instagram</li>
          </ExternalLink>
          <ExternalLink link="https://www.linkedin.com/in/victor-pineda-84956599/">
            <li>LinkedIn</li>
          </ExternalLink>
          <ExternalLink link="https://github.com/PinedaVictor">
            <li>Github</li>
          </ExternalLink>
        </ul>
      </FooterSection>
      <FooterSection>
        <ul className=" leading-loose">
          <Link to="/">
            <li className=" ">Home</li>
          </Link>
          <Link to="/WebApps">
            <li className=" ">Web Apps</li>
          </Link>
          <Link to="/HappyClients">
            <li className=" ">Clients</li>
          </Link>
          <Link to="/Pixels">
            <li className=" ">Pixels</li>
          </Link>
        </ul>
      </FooterSection>
      <div className="">&copy; Dreamlike Digital. All Rights Reserved</div>
    </footer>
  );
};
