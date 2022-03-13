import React from "react";
import { FooterSection } from "./FooterSection";

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="flex flex-wrap p-5 grid-cols-3 font-TY">
        <FooterSection>
          <p>About me</p>
        </FooterSection>
        <FooterSection>
          Social Media links
          <ul>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </FooterSection>
        <FooterSection>
          <p>Site map</p>
        </FooterSection>
        <div className="">&copy; Dreamlike Digital. All Rights Reserved</div>
      </footer>
    </>
  );
};
