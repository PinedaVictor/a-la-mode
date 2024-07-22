import React from "react";
import { MsgIcon } from "../../assets/icons/MsgIcon";
import { GithubIcon } from "../../assets/icons/GithubIcon";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getApp } from "firebase/app";
import { MenuIcon } from "../../assets/icons/MenuIcon";
import { ExternalLink } from "../atomic/atoms";
import { HomeIcon } from "../../assets/icons/HomeIcon";
import { Link } from "react-router-dom";

interface HeaderProps {
  toggleNav: () => void;
  toggleContact: () => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const app = getApp();
  const analytics = getAnalytics(app);

  const contactClicked = () => {
    const d = new Date(Date.now());
    // TODO: uncomment
    // logEvent(analytics, "select_content", {
    //   content_type: "contact-icon-button",
    //   content_id: d.toString(),
    // });
  };
  return (
    <>
      <header className="bg-offWhite w-screen h-14 sticky top-0 z-40 pt-2 align-middle items-center">
        <div className=" absolute left-1 flex pl-3 pt-2">
          <Link to={"/"} reloadDocument>
            <HomeIcon />
          </Link>
        </div>
        <div className="flex flex-row absolute right-32 pt-2">
          <ExternalLink link="https://github.com/PinedaVictor">
            <GithubIcon />
          </ExternalLink>
        </div>
        <div
          className="flex flex-row absolute right-16"
          onClick={props.toggleContact}
        >
          <button className="flex" onClick={contactClicked}>
            <MsgIcon />
          </button>
        </div>
        <div
          className="flex flex-row right-3 absolute"
          onClick={props.toggleNav}
        >
          <MenuIcon />
        </div>
      </header>
    </>
  );
};
