import { type FC, useEffect, useRef } from "react";
import { ClerkProvider, useUser, UserButton } from "@clerk/react";
import { getApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { PageWrapper } from "../components/atomic/templates/PageWrapper";
import { ItineraryDownloads } from "../components/atomic/organisms/ItineraryDownloads";
import { itinerariesConfig } from "../configs/itineraries";
import { H1, Spacer } from "../components/elements";
import { SpacerSummary } from "../components/atomic/atoms/SpacerSummary";

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
      <Spacer>
        <div className="pl-5 pr-5 flex flex-row justify-between items-center">
          <H1 heading="Travel Guides" />
          <UserButton />
        </div>
      </Spacer>
      <SpacerSummary>
        {
          "Free itineraries from the trips on my channel. Routes, stops, and tips, ready to download."
        }
      </SpacerSummary>
      <ItineraryDownloads itineraries={itinerariesConfig} unlocked={true} />
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
