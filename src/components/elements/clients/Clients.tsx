import React from "react";
import img from "../../../assets/images/art.jpg";
import { Client } from "./Client";

const clientData = [
  {
    avatar: { img: img, altText: "Art" },
    review:
      "Great angles! Victor takes the time and patience when it comes" +
      "to capturing the moment. He also pays attention to detail such" +
      "as location, clothes. A pleasure to work with, ALL-around great!",
    comments: [
      "Pleasure working with you Jeremey, looking forward to our next photoshoot.",
    ],
    space: 175,
  },
  {
    avatar: { img: img, altText: "Art" },
    review:
      "Great angles! Victor takes the time and patience when it comes" +
      "to capturing the moment. He also pays attention to detail such" +
      "as location, clothes. A pleasure to work with, ALL-around great!",
    comments: [
      "Pleasure working with you Jeremey, looking forward to our next photoshoot.",
    ],
    space: 175,
  },
  {
    avatar: { img: img, altText: "Art" },
    review: "Great angles!",
    comments: [
      "Pleasure working with you Jeremey, looking forward to our next photoshoot.",
    ],
    space: 75,
  },
];

export const Clients: React.FC = () => {
  return (
    <>
      <section className="p-5 md:pl-40 md:pr-40 grid md:m-auto lg:w-[60%] ">
        {clientData.map((item, index) => (
          <Client
            key={index}
            avatar={item.avatar}
            review={item.review}
            comments={item.comments}
            spaceNeeded={item.space}
          />
        ))}
      </section>
    </>
  );
};
