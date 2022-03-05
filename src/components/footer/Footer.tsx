import React from "react";

export const Footer: React.FC = () => {
  return (
    <>
      <footer className="flex flex-wrap p-5 grid-cols-3">
        <div className=" w-full md:w-1/3">Small about me</div>
        <div className=" w-full md:w-1/3">Social icons</div>
        <div className=" w-full md:w-1/3">Site links</div>
      </footer>
    </>
  );
};
