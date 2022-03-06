import React from "react";
import { FooterSection } from "./FooterSection";

const footerData = [{}];

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="flex flex-wrap p-5 grid-cols-3">
        <FooterSection>
          <p>About me</p>
        </FooterSection>
        <FooterSection>
          <p>Site map</p>
        </FooterSection>
        <FooterSection>
          Social Media links
          <ul>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </FooterSection>
        <div>&copy; Dreamlike Digital. All Rights Reserved</div>
      </footer>
    </>
  );
};
