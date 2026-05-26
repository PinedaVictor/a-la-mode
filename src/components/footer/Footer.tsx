import React from "react";
import { FooterSection } from "./FooterSection";
import { Link } from "@tanstack/react-router";
import { ExternalLink } from "../atomic/atoms";

export const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center p-5 w-screen font-SFR">
      <div className="flex flex-col md:flex-row md:gap-32">
        <FooterSection>
          <div className="pt-10">
            <p className="underline font-BN text-2xl whitespace-nowrap">Social Media</p>
            <ul className="leading-loose">
              <ExternalLink link="https://www.linkedin.com/in/pinedavictor095/">
                <li>LinkedIn</li>
              </ExternalLink>
              <ExternalLink link="https://github.com/PinedaVictor">
                <li>Github</li>
              </ExternalLink>
              <ExternalLink link="https://www.youtube.com/@vicblvd">
                <li>YouTube</li>
              </ExternalLink>
              <ExternalLink link="https://www.etsy.com/shop/DreamlikedigitalCo">
                <li>Etsy</li>
              </ExternalLink>
            </ul>
          </div>
        </FooterSection>
        <FooterSection>
          <div className="pt-10">
            <p className="underline font-BN text-2xl">Site Links</p>
            <ul className="leading-loose">
              <Link to="/"><li>Home</li></Link>
              <Link to="/projects"><li>Projects</li></Link>
              <Link to="/references"><li>References</li></Link>
            </ul>
          </div>
        </FooterSection>
      </div>
    </footer>
  );
};
