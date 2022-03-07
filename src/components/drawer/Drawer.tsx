import React from "react";
import { animated, useTransition } from "react-spring";
import { Link } from "react-router-dom";

interface DrawerProps {
  toggle: () => void;
  isOpen: boolean;
}
export const Drawer: React.FC<DrawerProps> = (props) => {
  const fullScreenMenu = useTransition(props.isOpen, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    config: {
      // TODO: specify delay, mass, friction, etc...
    },
  });
  return (
    <>
      {fullScreenMenu(
        (style, controlVar) =>
          controlVar && (
            <animated.div
              style={style}
              className=" z-50  h-full w-full fixed bg-blue"
            >
              {/* TODO: Close animation button with SVG icon */}
              <nav className=" pt-28 text-right">
                <ul className=" font-[Tommy] text-offWhite text-6xl p-5">
                  <Link to="/">
                    <li className=" pb-3">Home</li>
                  </Link>
                  <Link to="/WebApps">
                    <li className=" pb-3">Web Apps</li>
                  </Link>
                  <Link to="/HappyClients">
                    <li className=" pb-3">Happy Clients</li>
                  </Link>
                </ul>
              </nav>
              <div className=" float-right p-5">
                <button
                  onClick={props.toggle}
                  className=" text-offWhite font-[Tommy] border-solid border-4 rounded-full h-12 w-12"
                >
                  X
                </button>
              </div>
            </animated.div>
          )
      )}
    </>
  );
};
