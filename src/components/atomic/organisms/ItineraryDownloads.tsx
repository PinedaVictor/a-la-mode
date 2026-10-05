import { type FC } from "react";
import { SignIn } from "@clerk/react";
import { type DownloadableItinerary } from "../../../types";
import { ItineraryCard, scrollToSignIn } from "../molecules/ItineraryCard";
import { Comment } from "../../elements/clients/Comment";
import { Trails } from "../../springs/Trails";

type Props = {
  itineraries: DownloadableItinerary[];
  unlocked: boolean;
};
export const ItineraryDownloads: FC<Props> = (props) => {
  if (!props.unlocked) {
    // Public teaser: what each guide contains is visible (and indexable); the
    // cost lines and PDFs unlock after sign-in (a soft gate for now; see the
    // note on ItineraryCard's `locked` prop).
    return (
      <>
        <section className="px-5 pt-10 max-w-lg mx-auto flex flex-col items-center">
          <div className="w-full max-w-[400px] mx-auto mb-7">
            <Trails>
              <div>
                <Comment comment="Welcome friend!" />
              </div>
            </Trails>
          </div>
          <div className="w-full max-w-[400px] mx-auto mb-7 text-center font-SFR">
            <h1 className="font-TY font-bold text-2xl mb-2">Free Travel Guides</h1>
            <p>
              No AI here. Every guide comes from a trip I've actually taken,
              with real routes and actual cost breakdowns.{" "}
              <button
                type="button"
                onClick={scrollToSignIn}
                className="underline text-orange font-bold"
              >
                Sign in free
              </button>{" "}
              to unlock them.
            </p>
          </div>
        </section>
        <section className="columns-1 md:columns-2 lg:columns-3">
          {props.itineraries.map((item) => (
            <ItineraryCard key={item.slug} {...item} locked />
          ))}
        </section>
        <section
          id="sign-in"
          className="px-5 pt-5 pb-10 max-w-lg mx-auto flex flex-col items-center scroll-mt-20"
        >
          <SignIn
            withSignUp
            forceRedirectUrl="/travel-guides"
            signUpForceRedirectUrl="/travel-guides"
            signUpUrl="/travel-guides"
          />
        </section>
      </>
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
