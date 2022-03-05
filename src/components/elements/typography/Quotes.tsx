import React, { useState } from "react";
import { useTransition, animated } from "react-spring";

export const Quotes: React.FC = () => {
  const quotes = [
    "You'll never lose money if you invest in yourself.",
    "Believe in yourself and not in the reality of others.",
    "Negative opinions are perceptions of those who don't believe in you.",
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
      <section>
        <div className=" bg-satBlack h-64">
          {transitions((style, item) => (
            <animated.div style={style} className=" absolute ">
              <p className="text-offWhite font-[BebasNeue] text-4xl p-5 md:text-8xl">
                {quotes[item]}
              </p>
            </animated.div>
          ))}
        </div>
        <div className=" bg-yellow">
          <button className=" bg-tan h-10 w-10" onClick={cycleArray}>
            {"->"}
          </button>
        </div>
      </section>
    </>
  );
};
