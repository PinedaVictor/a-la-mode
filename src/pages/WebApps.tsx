import React from "react";
import { HeaderNav } from "../components";
import { WebDisplay } from "../components/elements";
import img from "../assets/images/webapps/UIS.jpg";
import vicApp from "../assets/images/webapps/vicApp.jpg";
import csunnft from "../assets/images/webapps/csunnft.jpg";
import landing from "../assets/images/webapps/dldLanding.jpg";
import { LeftRightSpring } from "../components/springs";

const WebAppsData = [
  {
    image: { src: img, altText: "United International web display" },
    title: "United International",
    link: "https://unitedinternationalservices.com/",
  },
  {
    image: { src: vicApp, altText: "United International web display" },
    title: "Victor Pineda Webfolio",
    link: "https://pinedavictor.com/",
  },
  {
    image: { src: landing, altText: "United International web display" },
    title: "United International",
    link: "https://unitedinternationalservices.com/",
  },
  {
    image: { src: csunnft, altText: "United International web display" },
    title: "CSUN NFT",
    link: "https://thatnft.io/",
  },
];

export const WebApps: React.FC = () => {
  return (
    <>
      <HeaderNav />
      <LeftRightSpring left={true} height={500}>
        <section className="grid md:grid-cols-3">
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
