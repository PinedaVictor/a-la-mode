import React from "react";
import { ArtPiece } from "../elements";

export const Art: React.FC = () => {
  return (
    <>
      <section className=" grid grid-cols-2 md:grid-cols-3 pb-8 bg-satBlack">
        {[1, 1, 1, 1, 1, 1].map((item, index) => (
          <ArtPiece key={index} />
        ))}
      </section>
    </>
  );
};
