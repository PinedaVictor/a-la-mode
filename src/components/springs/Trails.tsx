import React from "react";
import { useTrail, animated } from "@react-spring/web";

type TrailsProps = {
  children: React.ReactNode;
};

export const Trails: React.FC<TrailsProps> = (props) => {
  const Elements = React.Children.toArray(props.children);

  const trails = useTrail(Elements.length, {
    config: { mass: 5, tension: 2000, friction: 400 },
    from: { opacity: 0, x: 300, height: 0 },
    to: {
      opacity: 1,
      x: 0,
      height: 80,
    },
  });

  return (
    <>
      <div>
        {trails.map((props, index) => (
          <animated.div
            style={{
              ...props,
              overflowWrap: "break-word",
            }}
            key={index}
          >
            {Elements[index]}
          </animated.div>
        ))}
      </div>
    </>
  );
};
