import React from "react";

export const Spacer: React.FC = (props) => {
  return (
    <>
      <section className={" bg-offWhite w-screen overflow-hidden pt-16 pb-1"}>
        {props.children}
      </section>
    </>
  );
};
