import React from "react";
import img from "../../../assets/images/vic2.jpg";
import { Icon } from "../avatar/Icon";

export const Comment: React.FC = () => {
  return (
    <>
      <div>
        <div className=" absolute">
          <Icon img={img} imgAltText="Client image" />
        </div>
        <div className="flex mt-7 mb-8 bg-iBlue text-offWhite rounded-2xl">
          <div className=" pl-4 pt-2 pr-3 pb-1 ">
            <p>
              Pleasure working with Jeremy! Looking forward to our next
              photoshoot.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
