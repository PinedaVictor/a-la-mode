import React from "react";
import { HeaderNav } from "../components";
import { Pitch } from "../components/elements";

// TODO: Great a grid add and the pitch as the
//      first block.

// Do I want to focus on photography?

export const Pixels: React.FC = () => {
  const intro = "Hi friend, 🙂";
  const pitch = "I specialize in natural light and product photography. ";
  return (
    <>
      <HeaderNav />
      <div className="p-5">
        <Pitch intro={intro} pitch={pitch} />
      </div>
    </>
  );
};
