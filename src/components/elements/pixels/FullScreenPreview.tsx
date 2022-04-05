import React, { useContext } from "react";
import { animated, useTransition } from "react-spring";
import { ImageContext } from "../pixels/ImageProvider";
import { ArtPiece } from "./ArtPiece";

export const FullScreenPreview: React.FC = () => {
  const [view, setView, imgURL] = useContext(ImageContext);

  const fullScreen = useTransition(view, {
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
                className="z-50 h-full w-full fixed bg-satBlack"
                style={style}
              >
                <div className="md:grid md:grid-cols-3 pt-7">
                  <div />
                  <img src={imgURL} />
                  <div />
                </div>
                <div className=" absolute bottom-48 right-20">
                  <button
                    className="text-offWhite font-[Tommy] border-solid border-4 rounded-full h-16 w-16 text-2xl"
                    onClick={() => setView(false)}
                  >
                    X
                  </button>
                </div>
              </animated.div>
            )
        )}
      </div>
    </>
  );
};
