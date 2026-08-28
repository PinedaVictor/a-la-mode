import { type FC } from "react";
import { PageWrapper } from "../components/atomic/templates/PageWrapper";
import { Projects } from "../components/atomic/organisms/Projects";
import { H1, Spacer } from "../components/elements";
import { ExternalLink } from "../components/atomic/atoms";
import { SpacerSummary } from "../components/atomic/atoms/SpacerSummary";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { projectsConfig } from "../configs/projects";

export const BuildingPage: FC = () => {
  return (
    <PageWrapper>
      <Spacer>
        <div className="pl-5 pt-10 flex items-center gap-3">
          <H1 heading="building" />
          <ExternalLink link="https://github.com/PinedaVictor">
            <GithubIcon />
          </ExternalLink>
        </div>
      </Spacer>
      <Spacer>
        <div className="pl-5 pt-10">
          <H1 heading="collab" />
        </div>
      </Spacer>
      <SpacerSummary>
        {"Looking to build something? I take on select projects through "}
        <span className="underline text-orange font-bold">
          <ExternalLink link="https://dreamlikedigital.com">
            {"Dreamlike Digital."}
          </ExternalLink>
        </span>
      </SpacerSummary>
      <Projects projects={projectsConfig} />
    </PageWrapper>
  );
};
