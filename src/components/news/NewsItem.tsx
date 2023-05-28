import React from "react";
import img from "../../assets/images/twitter.jpg";
import { Icon } from "../elements";
import { ExternalLink } from "../atomic/atoms";

interface NewsItemProps {
  title: string;
  summary: string;
}

export const NewsItem: React.FC<NewsItemProps> = (props) => {
  return (
    <>
      <div className=" mb-8 md:mb-16">
        <div className=" inline-block">
          <p className=" font-bold pb-2">{props.title}</p>
          <p className="pr-6">{props.summary}</p>
        </div>
        <div className="  pt-6  flex  justify-center">
          <ExternalLink link="https://twitter.com/victorcodez">
            <Icon img={img} imgAltText="Twitter Icon" />
          </ExternalLink>
        </div>
      </div>
    </>
  );
};
