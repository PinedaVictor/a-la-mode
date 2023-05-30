import { LeftRightSpring } from "../../springs";
import img from "../../../assets/images/heart.jpg";
import greyBubble from "../../../assets/images/greyBubble.png";
import { Icon } from "../../elements/avatar/Icon";

interface LeftChatBubbleProps {
  avatar: { img: string; altText: string };
  review: string;
  comments?: string[];
  spaceNeeded: number;
}

export const LeftChatBubble: React.FC<LeftChatBubbleProps> = (props) => {
  return (
    <>
      <LeftRightSpring left={true} height={props.spaceNeeded}>
        <div className=" font-SFR">
          <div className="pb-7">
            {/* TODO: Client images */}
            <div className=" absolute ">
              <Icon img={img} imgAltText="Heart icon" />
            </div>
            <div className=" absolute ml-5">
              <Icon img={props.avatar.img} imgAltText="Client image" />
            </div>
          </div>
          <div className="flex mb-8 bg-iGrey text-offBlack rounded-2xl w-fit">
            <div className=" pl-4 pt-2 pr-3 pb-1 ">
              <p>{props.review}</p>
            </div>
          </div>
          <div className=" relative">
            <img
              className=" absolute left-0 bottom-8"
              src={greyBubble}
              height={20}
              width={20}
            />
          </div>
        </div>
      </LeftRightSpring>
    </>
  );
};
