import React from "react";
import img from "../../assets/icons/twitter.svg";
import { NewsItem } from "./NewsItem";
import { H1 } from "../elements";

const NewsData = [
  {
    avatar: img,
    title: "Sup",
    summary: "Check this out - super cool",
    link: "",
  },
];

export const News: React.FC = () => {
  return (
    <>
      <section className="grid p-5 lg:grid-cols-2 md:m-36 w-fit mt-24 mb-24">
        <div className="md:text-center mb-5 ">
          <H1 heading="Latests News" />
        </div>
        <div className="md:grid md:grid-cols-2  ">
          {[1, 1, 1, 1].map((item, index) => (
            <NewsItem key={index} />
          ))}
        </div>
      </section>
    </>
  );
};
