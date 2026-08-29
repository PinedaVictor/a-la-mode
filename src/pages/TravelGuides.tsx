import { type FC, useEffect, useRef } from "react";
import { ClerkProvider, useUser, UserButton } from "@clerk/react";
import { getApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { PageWrapper } from "../components/atomic/templates/PageWrapper";
import { ItineraryDownloads } from "../components/atomic/organisms/ItineraryDownloads";
import { itinerariesConfig } from "../configs/itineraries";
import { H1, Spacer } from "../components/elements";
import { SpacerSummary } from "../components/atomic/atoms/SpacerSummary";
import { ExternalLink } from "../components/atomic/atoms";
import { ChatWithMeCTA } from "../components/atomic/molecules/ChatWithMeCTA";

// Requires Clerk sign-in (Google/Microsoft only, configured in the Clerk
// Dashboard) before itineraries unlock. Flip to false to bypass the gate
// for design/testing.
const GATE_ENABLED = true;

const TravelGuidesContent: FC = () => {
  const { isLoaded, isSignedIn } = useUser();
  const unlocked = GATE_ENABLED ? Boolean(isSignedIn) : true;
  const hasLoggedUnlock = useRef(false);

  useEffect(() => {
    if (isSignedIn && !hasLoggedUnlock.current) {
      hasLoggedUnlock.current = true;
      logEvent(getAnalytics(getApp()), "travel_guides_unlocked");
    }
  }, [isSignedIn]);

  if (!isLoaded) {
    return <PageWrapper>{null}</PageWrapper>;
  }

  if (!unlocked) {
    return (
      <PageWrapper>
        <ItineraryDownloads itineraries={itinerariesConfig} unlocked={false} />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <div className="pl-5 pr-5 pt-20 sm:pt-5 flex justify-end">
        <UserButton />
      </div>
      <Spacer>
        <div className="pl-5 pr-5 flex flex-wrap items-end gap-3">
          <H1 heading="Travel Guides" />
          <div className="hidden sm:block -translate-y-3">
            <ChatWithMeCTA contentType="travel-guides-chat-cta" />
          </div>
        </div>
      </Spacer>
      <SpacerSummary>
        {
          "Itineraries from the trips on my channel. Routes, stops, and tips, ready to download."
        }
      </SpacerSummary>
      <div className="pr-5 pb-8 flex justify-end sm:hidden">
        <ChatWithMeCTA contentType="travel-guides-chat-cta" />
      </div>
      <ItineraryDownloads itineraries={itinerariesConfig} unlocked={true} />
      <div className="flex justify-center pb-10">
        <ExternalLink link="https://buymeacoffee.com/victorpineda">
          <div className="border-2 rounded-md border-grey px-5 py-3 text-center font-SFR">
            Found these guides helpful? Buy me a coffee ☕
          </div>
        </ExternalLink>
      </div>
    </PageWrapper>
  );
};

export const TravelGuidesPage: FC = () => {
  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <TravelGuidesContent />
    </ClerkProvider>
  );
};
