import React from "react";
import img from "../../../assets/images/art.jpg";

import { Client } from "./Client";

const clientData = [
  {
    avatar: { img: img, altText: "Art" },
    review: "Super COol",
  },
];

export const Clients: React.FC = () => {
  return (
    <>
      <section className="p-5 md:pl-40 md:pr-40 grid md:grid-cols-3">
        {clientData.map((item, index) => (
          <Client key={index} avatar={item.avatar} review={item.review} />
        ))}
      </section>
    </>
  );
};
