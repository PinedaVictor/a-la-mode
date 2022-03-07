import React from "react";
import { animated, useTransition } from "react-spring";
import { Link } from "react-router-dom";
import { AnimateNav } from "./AnimateNav";

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
  });
  return (
    <>
      {fullScreenMenu(
        (style, controlVar) =>
          controlVar && (
            <animated.div
              style={style}
              className=" z-50  h-full w-full fixed bg-blue pr-8"
            >
              <nav className=" pt-20 text-right ">
                <ul className=" font-[Tommy] text-offWhite text-6xl p-5">
                  <AnimateNav>
                    <Link to="/">
                      <li className=" ">Home</li>
                    </Link>
                    <Link to="/WebApps">
                      <li className=" ">Web Apps</li>
                    </Link>
                    <Link to="/HappyClients">
                      <li className=" ">Clients</li>
                    </Link>
                  </AnimateNav>
                </ul>
              </nav>
              <div className=" p-7">
                <button
                  onClick={props.toggle}
                  className="float-right  text-offWhite font-[Tommy] border-solid border-4 rounded-full h-16 w-16 text-2xl"
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
