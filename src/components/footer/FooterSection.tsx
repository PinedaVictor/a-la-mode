import React from "react";

export const FooterSection: React.FC = (props) => {
  return (
    <>
      <div className=" w-full md:w-1/3 h-80 p-5">{props.children}</div>
    </>
  );
};
