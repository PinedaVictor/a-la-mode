import { type FC } from "react";
import { type ReactChildren } from "../../../types";
import { HeaderNav } from "../../header/HeaderNav";
import { ContactModalProvider } from "../../header/ContactModalContext";
import { ScrollRevealProvider } from "../../header/ScrollRevealContext";

export const PageWrapper: FC<ReactChildren> = (props) => {
  return (
    <ContactModalProvider>
      <ScrollRevealProvider>
        <HeaderNav />
        {props.children}
      </ScrollRevealProvider>
    </ContactModalProvider>
  );
};
