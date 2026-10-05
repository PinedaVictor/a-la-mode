import { type FC } from "react";
import { Link } from "@tanstack/react-router";
import { PageWrapper } from "../components/atomic/templates/PageWrapper";
import { H1, Spacer } from "../components/elements";
import { SpacerSummary } from "../components/atomic/atoms/SpacerSummary";

// Rendered for unknown routes. Prerendered to dist/404.html, which Firebase
// Hosting serves with a real 404 status.
export const NotFound: FC = () => {
  return (
    <PageWrapper>
      <Spacer>
        <div className="pl-5 pr-5">
          <H1 heading="page not found" />
        </div>
      </Spacer>
      <SpacerSummary>
        {"That page doesn't exist. Try "}
        <Link to="/" className="underline text-orange font-bold">
          home
        </Link>
        {", "}
        <Link to="/building" className="underline text-orange font-bold">
          building
        </Link>
        {", or "}
        <Link to="/travel-guides" className="underline text-orange font-bold">
          travel guides
        </Link>
        {"."}
      </SpacerSummary>
    </PageWrapper>
  );
};
