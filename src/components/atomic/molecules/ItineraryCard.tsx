import { type FC, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { getApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { storage } from "../../firebase/config";
import { type DownloadableItinerary, type ItineraryAsset } from "../../../types";
import { Badge } from "../atoms/Badge";
import { ExternalLink } from "../atoms";
import { LeftRightSpring } from "../../springs";
import { YouTubeIcon } from "../../../assets/icons/YouTubeIcon";

export const ItineraryCard: FC<DownloadableItinerary> = (props) => {
  const [downloadingPath, setDownloadingPath] = useState<string | null>(null);

  const handleDownload = async (asset: ItineraryAsset) => {
    setDownloadingPath(asset.storagePath);
    try {
      const url = await getDownloadURL(ref(storage, asset.storagePath));
      logEvent(getAnalytics(getApp()), "itinerary_download", {
        guide_slug: props.slug,
        guide_title: props.title,
        asset_label: asset.label
      });
      const fileName = asset.storagePath.split("/").pop() || asset.label;
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } finally {
      setDownloadingPath(null);
    }
  };

  return (
    <LeftRightSpring left={false} height={250}>
      <div className=" p-7">
        <div className=" border-2 p-3 rounded-md border-grey">
          <div className="rounded-t-lg flex flex-row justify-between items-center">
            <p className=" font-TY font-bold text-2xl">{props.title}</p>
            {props.relatedVideoId && (
              <ExternalLink
                link={`https://www.youtube.com/watch?v=${props.relatedVideoId}`}
              >
                <YouTubeIcon />
              </ExternalLink>
            )}
          </div>
          <p className="my-3">{props.description}</p>
          {props.costBreakdown && props.costBreakdown.length > 0 && (
            <div className="mt-3">
              <p className="font-TY font-bold">Cost Breakdown</p>
              <ul className="list-disc list-inside">
                {props.costBreakdown.map((item, idx) => (
                  <li key={idx}>
                    {item.label}: {item.amount}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex flex-row justify-between items-end mt-3">
            <div className="flex flex-wrap">
              {props.tags.map((tag: string, idx: number) => (
                <div className=" mr-1 mb-1" key={idx}>
                  <Badge color="blue" text={tag} />
                </div>
              ))}
            </div>
            <div className="flex flex-col items-end font-TY">
              {props.assets.map((asset) => (
                <button
                  key={asset.storagePath}
                  type="button"
                  onClick={() => handleDownload(asset)}
                  disabled={downloadingPath === asset.storagePath}
                  className="pr-1 mt-1 disabled:opacity-50"
                >
                  {downloadingPath === asset.storagePath
                    ? "Preparing download..."
                    : asset.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LeftRightSpring>
  );
};
