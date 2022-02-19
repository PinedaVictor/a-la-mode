import React from "react";
import { ImageCarousel } from "../elements/pixels/ImageCarousel";
export const Hero: React.FC = () => {
  return (
    <>
      <section className="bg-tan h-screen top-0 flex">
        <div className="bg-yellow h-full  w-full">
          <ImageCarousel />
        </div>
      </section>
    </>
  );
};
