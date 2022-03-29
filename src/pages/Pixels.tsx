import React from "react";
import { HeaderNav } from "../components";
import { Pitch } from "../components/elements";

// TODO: Great a grid add and the pitch as the
//      first block.

export const Pixels: React.FC = () => {
  return (
    <>
      <HeaderNav />
      <div className="p-5">
        <Pitch intro="ELLO" pitch="Photo pitch" />
      </div>
    </>
  );
};
