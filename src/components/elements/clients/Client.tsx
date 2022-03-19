import React from "react";
import img from "../../../assets/images/art.jpg";
import img2 from "../../../assets/images/vic2.jpg";
import { Icon } from "../avatar/Icon";
import { Comment } from "./Comment";
import { LeftRightSpring } from "../../springs";

interface ClientProps {
  avatar: { img: string; altText: string };
  review: string;
  comments: string[];
  spaceNeeded: number;
}

// TODO: Map client data with props
export const Client: React.FC<ClientProps> = (props) => {
  return (
    <>
      <LeftRightSpring left={true} height={props.spaceNeeded}>
        <div>
          <div className="pb-7">
            {/* TODO: Client images */}
            <div className=" absolute ">
              <Icon img={img} imgAltText="Client image" />
            </div>
            <div className=" absolute ml-3">
              <Icon img={img2} imgAltText="Client image" />
            </div>
          </div>
          <div className="flex mb-8 bg-iGrey text-offBlack rounded-2xl w-fit">
            <div className=" pl-4 pt-2 pr-3 pb-1 ">
              <p>{props.review}</p>
            </div>
          </div>
        </div>
      </LeftRightSpring>
      <LeftRightSpring left={false} height={155}>
        {props.comments.map((item) => (
          <Comment comment={item} />
        ))}
      </LeftRightSpring>
    </>
  );
};
