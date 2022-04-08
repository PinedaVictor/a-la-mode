import React from "react";
import { HeaderNav } from "../components";
import { WebDisplay } from "../components/elements";
import img from "../assets/images/webapps/UIS.jpg";
import vicApp from "../assets/images/webapps/vicApp.jpg";
import csunnft from "../assets/images/webapps/csunnft.jpg";
import landing from "../assets/images/webapps/dldLanding.jpg";
import dld from "../assets/images/webapps/dld.jpg";
import { LeftRightSpring } from "../components/springs";

const WebAppsData = [
  {
    image: { src: img, altText: "United International web display" },
    title: "United International",
    link: "https://unitedinternationalservices.com/",
  },
  {
    image: { src: dld, altText: "Dreamlike Digital web app display" },
    title: "Dreamlike Digital",
    link: "https://dreamlikedigital.com/",
  },
  {
    image: { src: csunnft, altText: "Building NFT" },
    title: "CSUN NFT",
    link: "https://thatnft.io/",
  },
  {
    image: { src: vicApp, altText: "Wep app for CS student portfolio" },
    title: "Webfolio",
    link: "https://virnedgraphica.com/",
  },
  {
    image: { src: landing, altText: "Glitch website display" },
    title: "Glitch Theme Landing Page. Built for creators",
    link: "https://github.com/PinedaVictor/Glitch-Landing-Page",
  },
];

export const WebApps: React.FC = () => {
  return (
    <>
      <HeaderNav />
      <LeftRightSpring left={true} height={500}>
        <section className="grid md:grid-cols-2 lg:grid-cols-3">
          {WebAppsData.map((item, index) => (
            <WebDisplay
              key={index}
              image={item.image}
              link={item.link}
              title={item.title}
            />
          ))}
        </section>
      </LeftRightSpring>
    </>
  );
};
