import React from "react";

export const FooterSection: React.FC = (props) => {
  return (
    <>
      <footer className=" w-full md:w-1/3 h-80">{props.children}</footer>
    </>
  );
};
