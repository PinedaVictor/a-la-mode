import React from "react";
import img from "../../../assets/images/vic2.jpg";
import img2 from "../../../assets/images/bubble.png";
import { Icon } from "../avatar/Icon";

interface CommentProps {
  comment: string;
}

export const Comment: React.FC<CommentProps> = (props) => {
  return (
    <>
      <div className="w-fit">
        <div className="pb-7 relative">
          <div className=" absolute right-1">
            <Icon img={img} imgAltText="Client image" />
          </div>
        </div>
        <div className="flex  bg-iBlue text-offWhite rounded-2xl w-fit">
          <div className=" pl-4 pt-2 pr-3 pb-1 ">
            <p>{props.comment}</p>
          </div>
        </div>
        <div className=" relative">
          <img
            className=" absolute right-0  bottom-0 "
            src={img2}
            height={20}
            width={20}
          />
        </div>
      </div>
    </>
  );
};
