import { type FC } from "react";
import { PageWrapper } from "../components/atomic/templates/PageWrapper";
import { Projects } from "../components/atomic/organisms/Projects";
import { H1 } from "../components/elements";
import { ExternalLink } from "../components/atomic/atoms";
import { GithubIcon } from "../assets/icons/GithubIcon";
import { ChatWithMeCTA } from "../components/atomic/molecules/ChatWithMeCTA";
import { projectsConfig } from "../configs/projects";

export const BuildingPage: FC = () => {
  return (
    <PageWrapper>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 pt-10">
        <div>
          <div className="flex items-center gap-3">
            <H1 heading="building" />
            <ExternalLink link="https://github.com/PinedaVictor">
              <GithubIcon />
            </ExternalLink>
          </div>
          <p className="mt-4 font-SFR text-lg">
            {
              "hi, i'm a passionate software engineer who enjoys long days in the lab creating and experimenting with new technologies."
            }
          </p>
        </div>
        <div>
          <div className="flex flex-wrap items-end gap-3">
            <H1 heading="collab" />
            <div className="-translate-y-3">
              <ChatWithMeCTA contentType="collab-chat-cta" />
            </div>
          </div>
          <p className="mt-4 font-SFR text-lg">
            {"Looking to build something? I take on select projects through "}
            <span className="underline text-orange font-bold">
              <ExternalLink link="https://dreamlikedigital.com">
                {"Dreamlike Digital."}
              </ExternalLink>
            </span>
          </p>
        </div>
        <div>
          <H1 heading="by day" />
          <p className="mt-4 font-SFR text-lg">
            {"Currently working with an amazing team over at "}
            <span className="underline text-orange font-bold">
              <ExternalLink link="https://buzzsolutions.co/">
                {"Buzz Solutions!"}
              </ExternalLink>
            </span>
            {
              " Building the latest AI tech for energy infrastructure for a sustainable future. "
            }
            <span className="underline text-orange font-bold">
              <ExternalLink link="https://buzzsolutions.co/blog/">
                {"Read all about it."}
              </ExternalLink>
            </span>
          </p>
        </div>
      </div>
      <Projects projects={projectsConfig} />
    </PageWrapper>
  );
};
