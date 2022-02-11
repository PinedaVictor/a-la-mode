import React from "react";

interface SpacerProps {
  height: string;
}

export const Spacer: React.FC<SpacerProps> = (props) => {
  return (
    <>
      <div className={`h-[35rem] bg-offWhite w-screen p-5`}>
        {props.children}
      </div>
    </>
  );
};
