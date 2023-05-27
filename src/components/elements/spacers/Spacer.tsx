import React from "react";

type SpaceProps = {
  children: React.ReactNode;
};

export const Spacer: React.FC<SpaceProps> = (props) => {
  return (
    <>
      <section className={" bg-offWhite w-screen overflow-hidden pt-16 pb-1"}>
        {props.children}
      </section>
    </>
  );
};
