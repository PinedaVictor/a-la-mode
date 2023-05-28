import React from "react";
// import ig from "../../assets/icons/ig.svg";
// import twitter from "../../assets/icons/twitter.svg";
import vic from "../../assets/images/vic2.jpg";
import emailIcon from "../../assets/images/emailIcon.png";
import { Avatar } from "../elements";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getApp } from "firebase/app";

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
      <header className="bg-offWhite w-screen h-14 sticky top-0 z-40 ">
        <div className=" absolute left-0 flex pl-2">
          {/* TODO: Not needed ATM */}
          {/* <ExternalLink link="https://www.instagram.com/graphicabyvic/">
            <picture>
              <source type="image/svg+xml" srcSet={ig} />
              <img src={ig} width={45} alt="Instagram icon" />
            </picture>
          </ExternalLink> */}
          {/* <ExternalLink link="https://twitter.com/victorcodez">
            <picture>
              <source type="image/svg+xml" srcSet={twitter} />
              <img src={twitter} width={45} alt="Twitter icon" />
            </picture>
          </ExternalLink> */}
        </div>
        <div
          className="flex flex-row absolute right-16"
          onClick={props.toggleContact}
        >
          <button className="flex" onClick={contactClicked}>
            <Avatar img={emailIcon} imgAltText={"Email contact icon"} />
          </button>
        </div>
        <div
          className="flex flex-row right-2 absolute"
          onClick={props.toggleNav}
        >
          <Avatar img={vic} imgAltText={"Victor Pineda avatar"} />
        </div>
      </header>
    </>
  );
};
