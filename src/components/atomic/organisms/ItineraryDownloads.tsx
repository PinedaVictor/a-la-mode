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

export const ItineraryDownloads: FC<Props> = (props) => {
  if (!props.unlocked) {
    return (
      <section className="px-5 pt-10 pb-10 max-w-lg mx-auto flex flex-col items-center">
        <div className="w-full max-w-[400px] mx-auto mb-7">
          <Trails>
            <div>
              <Comment comment="Hi, thanks for stopping by! No AI here — every guide comes from a trip I've actually taken, written and designed by me, with real cost breakdowns included. Entirely free, no spam. Safe travels!" />
            </div>
          </Trails>
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
    <section className="grid md:grid-cols-2 lg:grid-cols-3">
      {props.itineraries.map((item) => (
        <ItineraryCard key={item.slug} {...item} />
      ))}
    </section>
  );
};
