import React from "react";
import img from "../../../assets/images/webapps/UIS.jpg";
import { ExternalLink } from "../../utils";
import { Avatar } from "../avatar/Avatar";

export const WebDisplay: React.FC = () => {
  return (
    <>
      <div className=" p-7">
        <div className=" ">
          <div className="">
            {/* This is one UI option */}
            {/* <div className=" absolute bg-yellow">WASSIP</div> */}
            <img
              className=" rounded-t-lg"
              src={img}
              width={1080}
              height={1080}
            />
          </div>
          <div className="flex p-3 font-TY border-x-2 border-b-2 rounded-b-lg border-grey">
            <p>UIS</p>
            <div className=" bg-orange">
              <ExternalLink link="">
                {/* <Avatar img={img} imgAltText="UIS web display" /> */}
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
