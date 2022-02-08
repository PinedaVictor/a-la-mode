import React, { useState } from "react";
import { useTrail, animated } from "react-spring";

export const Quote: React.FC = () => {
  const [animate, setAnimate] = useState(true);
  // TODO: Finishing animation
  // TODO: Height is dependent on screen size
  // TODO: How would we pass multiple quotes to this component?
  // TODO: How would we apply different styles to each item in the quotes array?
  // TODO: Would height also depend on the text size?
  const quotes = [
    "Photography is the transition of reality",
    "into a readable image.",
    "- Herbert Bayer",
  ];

  const trails = useTrail(quotes.length, {
    config: { mass: 5, tension: 2000, friction: 400 },
    opacity: animate ? 1 : 0,
    x: animate ? 0 : -20,
    height: animate ? 240 : 0,
    from: { opacity: 0, x: 30, height: 0 },
  });

  return (
    <>
      <div
        id="quote"
        className="text-offBlack text-6xl font-[Tommy] bg-yellow h-full"
        onClick={() => setAnimate(!animate)}
      >
        {trails.map((props, index) => (
          <animated.div style={props} key={index}>
            <p key={index}>{quotes[index]}</p>
          </animated.div>
        ))}
      </div>
    </>
  );
};
