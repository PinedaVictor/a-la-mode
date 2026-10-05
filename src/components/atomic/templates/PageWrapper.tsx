import { type FC } from "react";
import { type ReactChildren } from "../../../types";
import { HeaderNav } from "../../header/HeaderNav";
import { ContactModalProvider } from "../../header/ContactModalContext";
import { ScrollRevealProvider } from "../../header/ScrollRevealContext";
import { Footer } from "../../footer/Footer";

export const PageWrapper: FC<ReactChildren> = (props) => {
  return (
    <ContactModalProvider>
      <ScrollRevealProvider>
        <HeaderNav />
        {props.children}
        {/* On every page so each one links to the others in its HTML (the
            drawer menu only renders its links while open). */}
        <div className="clear-both h-16 bg-offWhite" />
        <Footer />
        <div className=" h-16 bg-offWhite" />
        <div className=" text-sm font-BN bg-orange text-center text-offWhite ">
          &copy; Dreamlike Digital. All Rights Reserved
        </div>
      </ScrollRevealProvider>
    </ContactModalProvider>
  );
};
