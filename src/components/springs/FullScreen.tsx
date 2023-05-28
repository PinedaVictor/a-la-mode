import React from "react";
import { animated, useTransition } from "react-spring";

type FullScreenProps = {
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
  color: string;
};

export const FullScreen: React.FC<FullScreenProps> = (props) => {
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
              className={" z-50  h-full w-full bg-offWhite fixed pr-8"}
            >
              <div>{props.children}</div>
              <div className=" p-7">
                <button
                  onClick={props.toggle}
                  className="float-right text-offBlack font-[Tommy] border-solid border-4 rounded-full h-16 w-16 text-2xl"
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
