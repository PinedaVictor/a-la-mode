import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

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
      <section className=" bg-satBlack  h-64 w-full pt-10">
        {transitions((style, item) => (
          <animated.div style={style} className=" absolute">
            <p className="text-offWhite font-[BebasNeue] text-5xl p-5 md:text-8xl ">
              {quotes[item]}
            </p>
          </animated.div>
        ))}
      </section>
      <section className=" w-full bg-satBlack pb-4 ">
        <div className=" flex flex-wrap pl-5">
          <div className=" h-4 w-4 bg-offWhite mr-2 rounded-full mt-3 border-solid border-2 border-offWhite" />
          <div className=" h-4 w-4 mr-2 rounded-full mt-3 border-2 border-offWhite" />
          <div className=" h-4 w-4 mr-2 rounded-full mt-3 border-2 border-offWhite" />
          {/* <button
            className=" h-11 w-11 rounded-full ml-40 border-2 border-offWhite"
            onClick={cycleArray}
          >
            {"->"}
          </button> */}
        </div>
      </section>
    </>
  );
};
