import { type FC } from "react";
import { type ReactChildren } from "../../../types";
import { HeaderNav } from "../../header/HeaderNav";

export const PageWrapper: FC<ReactChildren> = (props) => {
  return (
    <>
      <HeaderNav />
      {props.children}
    </>
  );
};
