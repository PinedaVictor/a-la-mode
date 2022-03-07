import React from "react";
import img from "../../assets/icons/twitter.svg";
import { NewsItem } from "./NewsItem";

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
      <section className="grid-cols-3 flex flex-wrap p-5">
        {[1, 1, 1].map((item) => (
          <NewsItem />
        ))}
      </section>
    </>
  );
};
