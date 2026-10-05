import React from "react";
import { FooterSection } from "./FooterSection";
import { Link } from "@tanstack/react-router";
import { getApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { ExternalLink } from "../atomic/atoms";

const STUDIO_URL =
  "https://dreamlikedigital.com/?utm_source=pinedavictor.com&utm_medium=referral&utm_campaign=footer";

const logStudioClick = () =>
  logEvent(getAnalytics(getApp()), "studio_click", { link_location: "footer" });

export const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center p-5 w-screen font-SFR">
      <div className="flex flex-col md:flex-row md:gap-32">
        <FooterSection>
          <div className="pt-10">
            <p className="underline font-BN text-2xl whitespace-nowrap">Connect</p>
            <ul className="leading-loose">
              <ExternalLink link={STUDIO_URL} onClick={logStudioClick}>
                <li className="whitespace-nowrap">Dreamlike Digital</li>
              </ExternalLink>
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
          <div className="pt-10">
            <p className="underline font-BN text-2xl">Site Links</p>
            <ul className="leading-loose">
              <Link to="/"><li>home</li></Link>
              <Link to="/building"><li>building</li></Link>
              <Link to="/travel"><li>travel</li></Link>
              <Link to="/travel-guides"><li>travel guides</li></Link>
              {/* <Link to="/projects"><li>Projects</li></Link>
              <Link to="/references"><li>References</li></Link> */}
            </ul>
          </div>
        </FooterSection>
        <FooterSection>
          <div className="pt-10">
            <p className="underline font-BN text-2xl whitespace-nowrap">coffee?</p>
            <ul className="leading-loose">
              <ExternalLink link="https://buymeacoffee.com/victorpineda">
                <li className="whitespace-nowrap">Buy Me a Coffee</li>
              </ExternalLink>
              <ExternalLink link="https://www.etsy.com/shop/DreamlikedigitalCo">
                <li>Etsy</li>
              </ExternalLink>
              <ExternalLink link="https://www.youtube.com/@vicblvd">
                <li>YouTube</li>
              </ExternalLink>
            </ul>
          </div>
        </FooterSection>
      </div>
    </footer>
  );
};
