import React from "react";
import { useTrail, animated } from "react-spring";

export const AnimateNav: React.FC = (props) => {
  const NavItems = React.Children.toArray(props.children);

  const trails = useTrail(NavItems.length, {
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
            {NavItems[index]}
          </animated.div>
        ))}
      </div>
    </>
  );
};
