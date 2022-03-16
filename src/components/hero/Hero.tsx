import React from "react";
import { ImageCarousel } from "../elements/pixels/ImageCarousel";
export const Hero: React.FC = () => {
  return (
    <>
      <section className=" h-screen top-0 flex">
        <div className=" bg-blue h-full  w-full">
          <ImageCarousel />
        </div>
      </section>
    </>
  );
};
