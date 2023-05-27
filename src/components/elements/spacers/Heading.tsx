import React from "react";
import { useTrail, animated } from "react-spring";

export const Heading: React.FC = (props) => {
  const quotes = React.Children.toArray(props.children);
  const animate = true;
  const trails = useTrail(quotes.length, {
    config: { mass: 5, tension: 2000, friction: 400 },
    opacity: animate ? 1 : 0,
    y: animate ? 0 : -200,
    height: animate ? 90 : 0,
    from: { opacity: 0, y: 300, height: 0 },
  });

  return (
    <>
      <section className="text-offBlack text-6xl md:text-7xl font-[Tommy] h-full w-full pl-5 lg:text-8xl sm:text-6xl overflow-hidden">
        <div className="text-left inline-block align-middle h-full pt-6 pb-44">
          {trails.map((props: any, index: number) => (
            <animated.div
              style={{
                ...props,
                overflowWrap: "break-word",
              }}
              key={index}
            >
              {quotes[index]}
            </animated.div>
          ))}
        </div>
      </section>
    </>
  );
};
