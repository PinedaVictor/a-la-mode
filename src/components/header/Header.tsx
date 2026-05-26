import React from "react";
import { MsgIcon } from "../../assets/icons/MsgIcon";
import { GithubIcon } from "../../assets/icons/GithubIcon";
import { YouTubeIcon } from "../../assets/icons/YouTubeIcon";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getApp } from "firebase/app";
import { MenuIcon } from "../../assets/icons/MenuIcon";
import { ExternalLink } from "../atomic/atoms";
import { HomeIcon } from "../../assets/icons/HomeIcon";
// import { Link } from "react-router-dom";
import { Link } from "@tanstack/react-router";

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
          <Link to={"/"}>
            <HomeIcon />
          </Link>
        </div>
        <div className="flex flex-row absolute right-14 pt-2 gap-4 items-center">
          <ExternalLink link="https://www.youtube.com/@vicblvd">
            <YouTubeIcon />
          </ExternalLink>
          <ExternalLink link="https://github.com/PinedaVictor">
            <GithubIcon />
          </ExternalLink>
          <button className="flex" onClick={() => { props.toggleContact(); contactClicked(); }}>
            <MsgIcon />
          </button>
        </div>
        <div
          className="flex flex-row right-3 absolute pt-2"
          onClick={props.toggleNav}
        >
          <MenuIcon />
        </div>
      </header>
    </>
  );
};
