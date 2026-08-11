import { type FC } from "react";
import { PageWrapper } from "../components/atomic/templates/PageWrapper";
import { TravelVideos } from "../components/atomic/organisms/TravelVideos";
import { travelConfig } from "../configs/travel";

export const TravelPage: FC = () => {
  return (
    <PageWrapper>
      <TravelVideos videos={travelConfig} />
    </PageWrapper>
  );
};
