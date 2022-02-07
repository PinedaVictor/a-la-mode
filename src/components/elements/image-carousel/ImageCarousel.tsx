import React, { useState } from "react";
import { useDrag } from "@use-gesture/react";
import { useTransition, animated } from "react-spring";

import img1 from "../../../assets/images/idk.png";
import img2 from "../../../assets/images/yes.jpg";

const imageData = [img1, img2];

export const ImageCarousel: React.FC = () => {
  const [imgCount, setImgCount] = useState(0);

  // TODO: Animate text for each image in the carousel
  // TODO: Place cycleArray function in useEffect to cycle through images

  const cycleArray = (event: any) => {
    event.preventDefault();
    setImgCount((prevState) => {
      const currentCount = prevState;
      const addOne = currentCount + 1;
      if (prevState == imageData.length - 1) {
        return 0;
      }
      return addOne;
    });
  };

  const bind = useDrag((state) => {
    if (state._direction[0] > 0) {
      // Moving right - finger moving left (mobile)
      setImgCount((prevState) => {
        const currentCount = prevState;
        const subtractOne = currentCount - 1;
        if (prevState == 0) {
          return imageData.length - 1;
        }
        return subtractOne;
      });
    } else {
      // Moving left - finger moving right (mobile)
      setImgCount((prevState) => {
        const currentCount = prevState;
        const addOne = currentCount + 1;
        if (prevState == imageData.length - 1) {
          return 0;
        }
        return addOne;
      });
    }
  });

  const transitions = useTransition(imgCount, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
  });

  return (
    <>
      <div className=" h-full w-full">
        {/* <button onClick={cycleArray}>click</button> */}
        {/* TODO: Animate text for each image */}
        <div className=" absolute z-10 bg-tan">
          <p>The text</p>
        </div>
        {transitions((styles, item) => (
          <animated.div
            className="h-full w-full absolute"
            style={styles}
            {...bind()}
          >
            <picture>
              <img
                src={imageData[item]}
                alt="Make sure alt text is in data"
                className="object-cover h-full w-full"
              />
            </picture>
          </animated.div>
        ))}
      </div>
    </>
  );
};
