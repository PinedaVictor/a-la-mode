import React from "react";
import img from "../../../assets/images/vic2.jpg";
import { Icon } from "../avatar/Icon";

interface CommentProps {
  comment: string;
}

export const Comment: React.FC<CommentProps> = (props) => {
  return (
    <>
      <div>
        <div className="pb-7">
          <div className=" absolute">
            <Icon img={img} imgAltText="Client image" />
          </div>
        </div>
        <div className="flex  bg-iBlue text-offWhite rounded-2xl w-fit">
          <div className=" pl-4 pt-2 pr-3 pb-1 ">
            <p>{props.comment}</p>
          </div>
        </div>
      </div>
    </>
  );
};
