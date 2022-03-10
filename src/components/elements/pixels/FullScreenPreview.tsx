import React, { useState } from "react";
import { animated, useTransition } from "react-spring";

interface FullScreenProps {
  show: boolean;
  toggle: () => void;
}

export const FullScreenPreview: React.FC<FullScreenProps> = (props) => {
  const fullScreen = useTransition(props.show, {
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
      <div>
        {fullScreen(
          (style, controlVar) =>
            controlVar && (
              <animated.div
                className="z-[500] h-full w-full fixed bg-yellow"
                style={style}
              >
                <button onClick={props.toggle}>CLOSE</button>
              </animated.div>
            )
        )}
      </div>
    </>
  );
};
