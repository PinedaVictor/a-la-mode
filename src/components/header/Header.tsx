import React from "react";
import ig from "../../assets/icons/ig.svg";
import twitter from "../../assets/icons/twitter.svg";

interface HeaderProps {
  toggle: () => void;
}
export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className="bg-offWhite w-screen h-14 sticky top-0 z-40 ">
        <div className=" absolute left-0 flex pl-2">
          {/* TODO: Add links to social media links */}
          <picture>
            <source type="image/svg+xml" srcSet={ig} />
            <img src={ig} width={45} alt="Instagram icon" />
          </picture>
          <picture>
            <source type="image/svg+xml" srcSet={twitter} />
            <img src={twitter} width={45} alt="Twitter icon" />
          </picture>
        </div>
        {/* TODO: Menu and menu icon (svg) */}
        <div
          className="flex flex-row right-0 absolute bg-yellow"
          onClick={props.toggle}
        >
          <div>Menu option</div>
        </div>
      </header>
    </>
  );
};
