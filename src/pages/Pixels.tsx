import React from "react";
import { PageWrapper } from "../components/atomic/templates/PageWrapper";
import { Pitch } from "../components/elements";

export const Pixels: React.FC = () => {
  const intro = "Hi friend, 🙂";
  const pitch = "I specialize in natural light and product photography. ";
  return (
    <PageWrapper>
      <div className="p-5">
        <Pitch intro={intro} pitch={pitch} />
      </div>
    </PageWrapper>
  );
};
