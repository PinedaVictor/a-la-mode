import { type FC } from "react";
import { SignIn } from "@clerk/react";
import { type DownloadableItinerary } from "../../../types";
import { ItineraryCard } from "../molecules/ItineraryCard";
import { Comment } from "../../elements/clients/Comment";
import { Trails } from "../../springs/Trails";

type Props = {
  itineraries: DownloadableItinerary[];
  unlocked: boolean;
};
//  No AI here—every guide comes from a trip I've actually taken, built from scratch with real routes and actual cost breakdowns. Sign in with Google below to unlock instant access.
export const ItineraryDownloads: FC<Props> = (props) => {
  if (!props.unlocked) {
    return (
      <section className="px-5 pt-10 pb-10 max-w-lg mx-auto flex flex-col items-center">
        <div className="w-full max-w-[400px] mx-auto mb-7">
          <Trails>
            <div>
              <Comment comment="Welcome friend!" />
            </div>
          </Trails>
        </div>
        <div className="w-full max-w-[400px] mx-auto mb-7 text-center">
          <p className="font-SFR">
            Travel Guides | Trip Highlights | Cost Breakdown
          </p>
        </div>
        <SignIn
          withSignUp
          forceRedirectUrl="/travel-guides"
          signUpForceRedirectUrl="/travel-guides"
          signUpUrl="/travel-guides"
        />
      </section>
    );
  }

  return (
    <section className="columns-1 md:columns-2 lg:columns-3">
      {props.itineraries.map((item) => (
        <ItineraryCard key={item.slug} {...item} />
      ))}
    </section>
  );
};
