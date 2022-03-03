import React from "react";

export const Spacer: React.FC = (props) => {
  return (
    <>
      <div className={" bg-offWhite w-screen overflow-hidden"}>
        {props.children}
      </div>
    </>
  );
};
