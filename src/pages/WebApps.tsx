import React from "react";
import { HeaderNav } from "../components";
import { WebDisplay } from "../components/elements";
import img from "../assets/images/webapps/UIS.jpg";

const WebAppsData = [
  {
    image: { src: img, altText: "United International web display" },
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
