import React, { useEffect, useState } from "react";
import { useDrag } from "@use-gesture/react";
import { useTransition, animated } from "@react-spring/web";

import img1 from "../../../assets/images/IMG_3007.jpg";
import img2 from "../../../assets/images/Art/andres.jpg";

const imageData = [img1, img2];
const images = [
  {
    image: imageData[0],
    text: "Digital Authenticity",
  },
  {
    image: imageData[1],
    text: "Something new, something unique",
  },
];

export const ImageCarousel: React.FC = () => {
  const [imgCount, setImgCount] = useState(0);

  // TODO: Add arrows and/or circles to show user where they are in the carousel
  // FIXME: May not need this function - try placing it within the useEffect function
  const cycleArray = () => {
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

  useEffect(() => {
    const timer = setTimeout(() => {
      cycleArray();
      bind();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [imgCount]);

  const transitions = useTransition(imgCount, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    config: { friction: 80, mass: 5 },
  });

  return (
    <>
      <section className=" h-full w-full">
        {transitions((styles, item) => (
          <>
            <animated.div
              className="h-full w-full absolute "
              style={{ ...styles }}
              {...bind()}
            >
              <animated.div
                style={styles}
                className=" absolute z-10 p-5 w-[25%]"
              >
                <div className=" inline-block bg-yellow font-[Tommy] translate-y-[25%] w-28 text-5xl">
                  <p className=" bg-satBlack w-full text-offWhite">
                    {images[item].text}
                  </p>
                </div>
              </animated.div>
              <div className="absolute  right-4 bottom-14">
                {/* <div className=" bg-satBlack text-offWhite font-TY h-fit w-fit text-lg ">
                  Next
                </div> */}
              </div>
              <picture>
                <source type="image/webp" srcSet={images[item].image} />
                <img
                  src={images[item].image}
                  // TODO: Alt text in data object
                  alt="Make sure alt text is in data"
                  className="object-cover h-full w-full"
                />
              </picture>
            </animated.div>
          </>
        ))}
      </section>
    </>
  );
};
