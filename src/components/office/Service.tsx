import React from "react";

interface ServiceProps {
  serviceNumber: number;
  summary: string;
}

export const Service: React.FC<ServiceProps> = (props) => {
  return (
    <>
      <div className=" bg-offWhite p-5 font-SFR">
        <p className=" text-4xl font-[Tommy]">0{props.serviceNumber}</p>
        <p>{props.summary}</p>
      </div>
    </>
  );
};
