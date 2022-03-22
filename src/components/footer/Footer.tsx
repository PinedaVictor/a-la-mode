import React from "react";
import { FooterSection } from "./FooterSection";
import { Pitch } from "./Pitch";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap p-5 grid-cols-3 ">
        <FooterSection>
          <Pitch />
        </FooterSection>
        <FooterSection>
          Social Media links
          {/* TODO: Get social links */}
          <ul>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Github</li>
          </ul>
        </FooterSection>
        <FooterSection>
          <ul>
            <Link to="/">
              <li className=" ">Home</li>
            </Link>
            <Link to="/WebApps">
              <li className=" ">Web Apps</li>
            </Link>
            <Link to="/HappyClients">
              <li className=" ">Clients</li>
            </Link>
            <Link to="/HappyClients">
              <li className=" ">Pixels</li>
            </Link>
          </ul>
        </FooterSection>
        <div className="">&copy; Dreamlike Digital. All Rights Reserved</div>
      </div>
    </>
  );
};
