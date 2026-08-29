import { type FC } from "react";
import { ExternalLink } from "../atomic/atoms";

export const HeaderTagline: FC = () => {
  return (
    <p className="bg-yellow font-BR text-offBlack text-3xl px-3 h-full flex items-center gap-1 whitespace-nowrap">
      {"dev, art, travel,"}
      <span className="underline text-orange font-bold">
        <ExternalLink link="https://buymeacoffee.com/victorpineda">
          coffee?
        </ExternalLink>
      </span>
    </p>
  );
};
