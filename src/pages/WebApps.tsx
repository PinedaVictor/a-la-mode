import React from "react";
import { HeaderNav } from "../components";
import { WebDisplay } from "../components/elements";
import img from "../assets/images/webapps/UIS.jpg";
import vicApp from "../assets/images/webapps/vicApp.jpg";
import landing from "../assets/images/webapps/dldLanding.jpg";

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
];

export const WebApps: React.FC = () => {
  return (
    <>
      <HeaderNav />
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
    </>
  );
};
