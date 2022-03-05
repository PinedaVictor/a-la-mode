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
      backgroundColor: "red",
      height: "100%",
      width: "100%",
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
            <animated.div style={style} className=" z-50  h-full fixed">
              Menu
              <button onClick={props.toggle}>CLOSE</button>
            </animated.div>
          )
      )}
    </>
  );
};
