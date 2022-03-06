import React from "react";
import { animated, useTransition } from "react-spring";

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
              className=" z-50  h-full w-full fixed bg-orange"
            >
              <button onClick={props.toggle}>CLOSE</button>
              <nav>
                <ul className=" font-[Tommy] text-offWhite text-6xl p-5">
                  <li className=" pb-3">Home</li>
                  <li className=" pb-3">Web Apps</li>
                  <li className=" pb-3">Happy Clients</li>
                </ul>
              </nav>
            </animated.div>
          )
      )}
    </>
  );
};
