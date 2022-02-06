import React from "react";
import { ImageCarousel } from "../elements/image-carousel/ImageCarousel";
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
