import React, { useState } from "react";
import { ArtPiece } from "../elements";
import { useTransition, animated } from "react-spring";
import img from "../../assets/images/art.jpg";
import img6 from "../../assets/images/42.jpg";
import dope from "../../assets/images/Art/dopamine3.jpg";
import circle from "../../assets/images/Art/test2.jpg";
import vic from "../../assets/images/Art/vic.png";
import andres from "../../assets/images/Art/andres.png";

const Arts = [
  {
    imgURL: img,
    altText: "Tunnel Vision Art piece",
  },
  {
    imgURL: vic,
    altText: "Three stack Art piece",
  },
  {
    imgURL: dope,
    altText: "Tunnel Vision Art piece",
  },
  {
    imgURL: circle,
    altText: "Three stack Art piece",
  },
  {
    imgURL: img6,
    altText: "Tunnel Vision Art piece",
  },
  {
    imgURL: andres,
    altText: "Three stack Art piece",
  },
];

export const Art: React.FC = () => {
  const [imgCount, setImgCount] = useState(0);
  const transitions = useTransition(imgCount, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)", display: "none" },
    delay: 200,
    config: { friction: 80, mass: 5 },
  });

  const cycleArray = () => {
    setImgCount((prevState) => {
      const currentCount = prevState;
      const addOne = currentCount + 1;
      if (prevState == Arts.length - 1) {
        return 0;
      }
      return addOne;
    });
  };

  return (
    <>
      <div className=" h-12 mb-4 relative rounded-t-3xl bg-satBlack">
        <p className=" text-offWhite  absolute pl-5 pb-2 bottom-0 font-TY text-2xl">
          Original Art
        </p>
      </div>
      <div className="   ">
        {transitions((styles, item) => (
          <animated.div style={styles} className=" bg-yellow  ">
            <ArtPiece imageURL={Arts[item].imgURL} altText={"whao"} />
          </animated.div>
        ))}
      </div>
      <div
        className=" h-10 bg-satBlack w-1/2 float-right rounded-b-3xl mt-4 "
        onClick={() => cycleArray()}
      >
        <p className=" text-offWhite font-TY mt-2 ml-3">Next</p>
      </div>
    </>
  );
};
