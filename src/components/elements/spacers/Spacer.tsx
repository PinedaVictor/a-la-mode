import React from "react";

interface SpacerProps {
  height: string;
}

export const Spacer: React.FC<SpacerProps> = (props) => {
  return (
    <>
      <div className={`h-[${props.height}] bg-offWhite w-screen`}>
        {props.children}
      </div>
    </>
  );
};
