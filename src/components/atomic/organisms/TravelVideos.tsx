import { FC } from "react";
import { TravelVideo } from "../../../types";
import { VideoCard } from "../molecules/VideoCard";

type Props = {
  videos: TravelVideo[];
};

export const TravelVideos: FC<Props> = (props) => {
  return (
    <section className="grid md:grid-cols-2 lg:grid-cols-3">
      {props.videos.map((item, index) => (
        <VideoCard
          key={index}
          title={item.title}
          videoId={item.videoId}
          tags={item.tags}
        />
      ))}
    </section>
  );
};
