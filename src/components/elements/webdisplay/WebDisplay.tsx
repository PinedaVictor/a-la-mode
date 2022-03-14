import React from "react";
import img from "../../../assets/images/webapps/UIS.jpg";
import { ExternalLink } from "../../utils";

export const WebDisplay: React.FC = () => {
  return (
    <>
      <div className=" p-7">
        <div className=" bg-yellow ">
          <div className=" rounded bg-yellow">
            <img className=" rounded" src={img} width={1080} height={1080} />
          </div>
          <div className="flex">
            <p>Title</p>
            <div className="">
              <ExternalLink link="">
                <p>Title</p>
              </ExternalLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
