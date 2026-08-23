import { type FC } from "react";
import { Link } from "@tanstack/react-router";
import { PageWrapper } from "../components/atomic/templates/PageWrapper";
import { TravelVideos } from "../components/atomic/organisms/TravelVideos";
import { travelConfig } from "../configs/travel";

export const TravelPage: FC = () => {
  return (
    <PageWrapper>
      <p className="text-center pt-10 font-TY">
        Want the routes from these trips?{" "}
        <Link to="/travel-guides" className="underline text-orange font-bold">
          Get the free itineraries
        </Link>
      </p>
      <TravelVideos videos={travelConfig} />
    </PageWrapper>
  );
};
