import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { MsgIcon } from "../../assets/icons/MsgIcon";
import { YouTubeIcon } from "../../assets/icons/YouTubeIcon";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getApp } from "firebase/app";
import { MenuIcon } from "../../assets/icons/MenuIcon";
import { ExternalLink } from "../atomic/atoms";
import { Avatar } from "../elements";
import { HeaderTagline } from "./HeaderTagline";
import { useScrollReveal } from "./ScrollRevealContext";
import vic from "../../assets/images/Art/vic.webp";
// import { Link } from "react-router-dom";
import { Link } from "@tanstack/react-router";

interface HeaderProps {
  toggleNav: () => void;
  toggleContact: () => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const app = getApp();
  const analytics = getAnalytics(app);
  const { chatRevealed } = useScrollReveal();

  const contactClicked = () => {
    const d = new Date(Date.now());
    logEvent(analytics, "select_content", {
      content_type: "contact-icon-button",
      content_id: d.toString(),
    });
  };

  const chatSpring = useSpring({
    opacity: chatRevealed ? 1 : 0,
    width: chatRevealed ? 28 : 0,
    marginLeft: chatRevealed ? 16 : 0,
    config: { tension: 280, friction: 32 }
  });

  return (
    <>
      <header className="bg-offWhite w-screen h-14 sticky top-0 z-40 pt-2 align-middle items-center">
        {/* <div className=" absolute left-1 flex pl-3">
          <Link to={"/"}>
            <Avatar img={vic} imgAltText="Victor Pineda - home" />
          </Link>
        </div> */}
        <div className=" absolute left-0 top-0 h-full flex items-stretch">
          <HeaderTagline />
        </div>
        {/* Desktop/tablet: single horizontal row */}
        <div className="hidden sm:flex flex-row absolute right-3 pt-2 items-center">
          <ExternalLink link="https://www.youtube.com/@vicblvd">
            <YouTubeIcon />
          </ExternalLink>
          <animated.button
            style={chatSpring}
            className={`flex items-center overflow-hidden ${chatRevealed ? "" : "pointer-events-none"}`}
            onClick={() => { props.toggleContact(); contactClicked(); }}
          >
            <MsgIcon />
          </animated.button>
          <div className="flex flex-row ml-4" onClick={props.toggleNav}>
            <MenuIcon />
          </div>
        </div>

        {/* Mobile: L-shaped nav so this cluster doesn't bleed into the hero
            intro chip - youtube + chat sit in a row, menu drops below chat. */}
        <div className="flex sm:hidden flex-col items-end gap-2 absolute right-3 top-2">
          <div className="flex flex-row items-center bg-offWhite rounded-full shadow-sm px-2 py-1">
            <ExternalLink link="https://www.youtube.com/@vicblvd">
              <YouTubeIcon />
            </ExternalLink>
            <animated.button
              style={chatSpring}
              className={`flex items-center overflow-hidden ${chatRevealed ? "" : "pointer-events-none"}`}
              onClick={() => { props.toggleContact(); contactClicked(); }}
            >
              <MsgIcon />
            </animated.button>
          </div>
          <div
            className="flex flex-row bg-offWhite rounded-full shadow-sm p-1"
            onClick={props.toggleNav}
          >
            <MenuIcon />
          </div>
        </div>
      </header>
    </>
  );
};
