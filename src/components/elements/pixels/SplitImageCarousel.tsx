import { type FC, useContext, useEffect, useState } from "react";
import { useDrag } from "@use-gesture/react";
import { useTransition, animated } from "@react-spring/web";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getApp } from "firebase/app";
import { ImageContext } from "./ImageProvider";

import img1 from "../../../assets/images/hero-images/IMG_5932.webp";
import img2 from "../../../assets/images/hero-images/IMG_1125 Large.webp";
import img3 from "../../../assets/images/hero-images/IMG_1335.webp";
import img4 from "../../../assets/images/hero-images/IMG_7257-2.webp";
import img5 from "../../../assets/images/hero-images/IMG_7411.webp";

// TODO: Swap in real captions/locations for these once decided.
const images = [
  {
    image: img1,
    text: "Château de Vaux-le-Vicomte in Maincy, France"
  },
  {
    image: img2,
    text: "Cao Bang Loop, Vietnam."
  },
  {
    image: img3,
    text: "Cao Bang, Vietnam."
  },
  // {
  //   image: img4,
  //   text: "Midnight in Baghdad."
  // },
  {
    image: img5,
    text: "Abu Dulaf Minaret, Samarra Iraq."
  }
];

export const SplitImageCarousel: FC = () => {
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const [, setFullScreen, , setFullScreenImgURL] = useContext(ImageContext);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const previous = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const bind = useDrag((state) => {
    if (state._direction[0] > 0) {
      previous();
    } else {
      next();
    }
  });

  useEffect(() => {
    const timer = setTimeout(next, 3000);
    return () => clearTimeout(timer);
  }, [index]);

  const transitions = useTransition(index, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: {
      opacity: 0,
      transform: "translate3d(-50%,0,0)",
      position: "absolute"
    }
  });

  const current = images[index];

  const handleLike = () => {
    const nextLiked = !liked;
    setLiked(nextLiked);
    if (nextLiked) {
      logEvent(getAnalytics(getApp()), "select_content", {
        content_type: "hero-image-like",
        content_id: current.text
      });
    }
  };

  return (
    <div className="relative drop-shadow-[18px_25px_25px_rgba(0,0,0,0.45)] flex flex-col h-full w-full">
      <div
        {...bind()}
        className="relative flex-1 min-h-0 overflow-hidden rounded-t-3xl touch-pan-y"
      >
        {transitions((styles, item) => (
          <animated.div style={styles} className="absolute inset-0">
            <picture
              className="block h-full w-full cursor-pointer"
              onClick={() => {
                setFullScreen(true);
                setFullScreenImgURL(images[item].image);
              }}
            >
              <source type="image/webp" srcSet={images[item].image} />
              <img
                src={images[item].image}
                // TODO: Alt text in data object
                alt="Make sure alt text is in data"
                className="object-cover h-full w-full"
              />
            </picture>
          </animated.div>
        ))}
      </div>
      <div className="h-12 shrink-0 relative rounded-b-3xl bg-satBlack">
        <p className="text-offWhite absolute left-0 right-0 pl-5 pb-2 bottom-0 font-TY text-xl truncate pr-5">
          {current.text}
        </p>
      </div>
      <button
        onClick={handleLike}
        aria-label={liked ? "Unlike image" : "Like image"}
        className="absolute bottom-28 right-3 z-10 h-10 w-10 rounded-full border-2 border-offWhite text-offWhite bg-satBlack/60 flex items-center justify-center"
      >
        {liked ? (
          <HeartIconSolid className="h-5 w-5 text-orange" />
        ) : (
          <HeartIconOutline className="h-5 w-5" />
        )}
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute bottom-16 right-3 z-10 h-10 w-10 rounded-full border-2 border-offWhite text-offWhite text-2xl font-SFM bg-satBlack/60 flex items-center justify-center"
      >
        <p className="mb-1">{">"}</p>
      </button>
    </div>
  );
};
