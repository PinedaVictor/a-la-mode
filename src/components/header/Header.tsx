import React from "react";
import ig from "../../assets/icons/ig.svg";
import twitter from "../../assets/icons/twitter.svg";
import vic from "../../assets/images/vic2.jpg";
import { Avatar } from "../elements";
import { ExternalLink } from "../utils";

interface HeaderProps {
  toggle: () => void;
}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className="bg-offWhite w-screen h-14 sticky top-0 z-40 ">
        <div className=" absolute left-0 flex pl-2">
          <ExternalLink link="https://www.instagram.com/graphicabyvic/">
            {/* IG icon but not needed */}
            {/* <picture>
              <source type="image/svg+xml" srcSet={ig} />
              <img src={ig} width={45} alt="Instagram icon" />
            </picture> */}
          </ExternalLink>
          <ExternalLink link="https://twitter.com/victorcodez">
            <picture>
              <source type="image/svg+xml" srcSet={twitter} />
              <img src={twitter} width={45} alt="Twitter icon" />
            </picture>
          </ExternalLink>
        </div>

        <div className="flex flex-row right-2 absolute" onClick={props.toggle}>
          <Avatar img={vic} imgAltText={"Victor Pineda avatar"} />
        </div>
      </header>
    </>
  );
};
