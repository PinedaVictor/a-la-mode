import React from "react";
import { useTrail, animated } from "@react-spring/web";

// TODO: Impement interface
interface LeftRightSpringProps {
  left: boolean;
  height: number;
  children: React.ReactNode;
}

export const LeftRightSpring: React.FC<LeftRightSpringProps> = (props) => {
  const items = React.Children.toArray(props.children);
  const trails = useTrail(items.length, {
    config: { mass: 15, tension: 190, friction: 75 },
    from: {
      opacity: 0,
      x: props.left ? -300 : 300,
      y: props.left ? -200 : 200,
      height: 0,
    },
    to: {
      opacity: 1,
      x: 0,
      y: 0,
      height: props.height,
      // TODO: Height needs to be edited if more than one comment is added. With a prop?
    },
  });
  return (
    <>
      <div>
        {trails.map((props, index) => (
          <animated.div style={props} key={index}>
            {items[index]}
          </animated.div>
        ))}
      </div>
    </>
  );
};
