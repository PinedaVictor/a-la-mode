import React, { useEffect, useState } from "react";
import { ArtPiece } from "../elements";
import { useTransition, animated } from "@react-spring/web";
import banGioc from "../../assets/images/buy-on-etsy/ban-gioc-waterfall-cao-bang.webp";
import tunnelVisionEtsy from "../../assets/images/buy-on-etsy/tunnel_vision.webp";
import chevre from "../../assets/images/buy-on-etsy/chevreArtPostorDisplay.webp";

const Arts = [
  {
    imgURL: banGioc,
    altText: "Ban Gioc Waterfall, Cao Bang, Vietnam Art piece",
    etsyLink:
      "https://www.etsy.com/listing/4565017437/ban-gioc-waterfall-travel-poster-cao",
  },
  {
    imgURL: tunnelVisionEtsy,
    altText: "Tunnel Vision Art piece print",
    etsyLink:
      "https://www.etsy.com/listing/4565129022/tunnel-vision-poster-glitch-art-skate",
  },
  {
    imgURL: chevre,
    altText: "Chevre Art piece print",
    etsyLink:
      "https://www.etsy.com/listing/4511336675/colombian-spanish-slang-chevre-wall-art",
  },
];

export const Art: React.FC = () => {
  const [imgCount, setImgCount] = useState(0);
  const transitions = useTransition(imgCount, {
    from: {
      opacity: 0,
      transform: "translate3d(100%,0,0)",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%,0,0)",
    },
    leave: {
      opacity: 0,
      transform: "translate3d(-50%,0,0)",
      position: "absolute",
    },
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

  useEffect(() => {
    for (let i = 0; i < Arts.length; i++) {
      setImgCount(i);
    }
    setImgCount(0);
  }, []);

  return (
    <>
      <div className=" h-12 mb-4 relative rounded-t-3xl bg-satBlack">
        <p className=" text-offWhite  absolute pl-5 pb-2 bottom-0 font-TY text-2xl">
          Original Art
        </p>
      </div>
      <div className="relative rounded-b-3xl overflow-hidden">
        {/* FIXME: Absolute display causes News section to overlay */}
        {transitions((styles, item) => (
          <animated.div style={styles}>
            <ArtPiece
              imageURL={Arts[item].imgURL}
              altText={Arts[imgCount].altText}
              etsyLink={Arts[item].etsyLink}
              aspectClassName="aspect-[4/5]"
            />
          </animated.div>
        ))}
        <button
          onClick={() => cycleArray()}
          aria-label="Next art piece"
          className="absolute bottom-16 right-3 z-10 h-10 w-10 rounded-full border-2 border-offWhite text-offWhite text-2xl font-SFM bg-satBlack/60 flex items-center justify-center"
        >
          <p className="mb-1">{">"}</p>
        </button>
      </div>
    </>
  );
};
