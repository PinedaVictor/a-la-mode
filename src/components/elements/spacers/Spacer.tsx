import React from "react";

export const Spacer: React.FC = (props) => {
  return (
    <>
      <section className={" bg-offWhite w-screen overflow-hidden"}>
        {props.children}
      </section>
    </>
  );
};
