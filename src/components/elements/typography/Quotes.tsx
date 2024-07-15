import React, { useState } from "react";
import { useTransition, animated } from "@react-spring/web";

export const Quotes: React.FC = () => {
  const quotes = [
    "You'll never lose money if you invest in yourself.",
    "Believe in yourself and not in the reality of others.",
    "Reject the perceptions of those who don't believe in you.",
  ];
  const [count, setCount] = useState(0);

  const transitions = useTransition(count, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    config: { friction: 80, mass: 5 },
  });

  const cycleArray = () => {
    setCount((prevState) => {
      const currentCount = prevState;
      const addOne = currentCount + 1;
      if (prevState == quotes.length - 1) {
        return 0;
      }
      return addOne;
    });
  };

  return (
    <>
      <section className=" bg-satBlack pt-8 pb-6">
        <div className=" bg-satBlack h-40 pt-10 flex justify-center">
          {transitions((style, item) => (
            <animated.div style={style} className=" absolute">
              <p className="text-offWhite font-[BebasNeue] text-3xl p-5 md:text-5xl ">
                {quotes[item]}
              </p>
            </animated.div>
          ))}
        </div>
        <div className=" pb-10">
          <div className=" flex flex-wrap justify-center ">
            <button
              onClick={cycleArray}
              className=" h-10 w-10 mr-3 rounded-full mt-3 border-solid border-2 border-offWhite text-offWhite text-2xl font-SFM"
            >
              <p className=" mb-2">{">"}</p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
