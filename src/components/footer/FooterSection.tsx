import React from "react";

type FooterSectionProps = {
  children: React.ReactNode;
};

export const FooterSection: React.FC<FooterSectionProps> = (props) => {
  return (
    <>
      <div className=" w-full md:w-1/3 p-5 h-fit">{props.children}</div>
    </>
  );
};
