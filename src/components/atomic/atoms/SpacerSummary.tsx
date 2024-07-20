import { type FC } from "react";
import { type ReactChildren } from "../../../types";

export const SpacerSummary: FC<ReactChildren> = (props) => {
  return (
    <div className=" h-fit relative mt-4 pl-2 pr-2 pb-4">
      <p className=" ml-4 text-2xl font-SFR">{props.children}</p>
    </div>
  );
};
