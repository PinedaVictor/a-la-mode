import { type FC, useState } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { getApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { storage } from "../../firebase/config";
import { type DownloadableItinerary, type ItineraryAsset, type CostItem } from "../../../types";
import { Badge } from "../atoms/Badge";
import { ExternalLink } from "../atoms";
import { LeftRightSpring } from "../../springs";
import { YouTubeIcon } from "../../../assets/icons/YouTubeIcon";

type CostGroup = {
  region?: string;
  items: CostItem[];
};

function groupCostBreakdown(costBreakdown: CostItem[]): CostGroup[] {
  const groups: CostGroup[] = [];
  for (const item of costBreakdown) {
    const lastGroup = groups[groups.length - 1];
    if (lastGroup && lastGroup.region === item.region) {
      lastGroup.items.push(item);
    } else {
      groups.push({ region: item.region, items: [item] });
    }
  }
  return groups;
}

// "What's inside" bullets for the public teaser, built only from facts in the
// config (counts, never the gated values themselves).
function teaserBullets(props: DownloadableItinerary): string[] {
  const bullets: string[] = [];
  const costs = props.costBreakdown ?? [];
  if (costs.length > 0) {
    const stops = new Set(costs.map((c) => c.region).filter(Boolean)).size;
    bullets.push(
      stops > 1
        ? `${costs.length} itemized costs across ${stops} stops`
        : `${costs.length} itemized costs`
    );
  }
  bullets.push(...(props.highlights ?? []));
  if (props.assets.length > 0) bullets.push("Downloadable PDF guide");
  return bullets;
}

// Scrolls instead of linking to "#sign-in": Clerk's <SignIn> can use the URL
// hash for its own routing.
export const scrollToSignIn = () =>
  document.getElementById("sign-in")?.scrollIntoView({ behavior: "smooth" });

type Props = DownloadableItinerary & {
  // Signed-out view: teaser only. Cost lines and download buttons aren't
  // rendered, which keeps them out of the prerendered HTML and Google. This is
  // a soft gate: itinerariesConfig (costs, storage paths) still ships in the JS
  // bundle and storage.rules allows public reads of itineraries/. Real
  // enforcement is a TODO (Clerk -> Firebase Auth + auth-only storage rules).
  locked?: boolean;
};

export const ItineraryCard: FC<Props> = ({ locked = false, ...props }) => {
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
    <LeftRightSpring left={false} height={250} className="break-inside-avoid">
      <div className=" p-7">
        <div className=" border-2 p-3 rounded-md border-grey">
          <div className="rounded-t-lg flex flex-row justify-between items-center">
            <h2 className=" font-TY font-bold text-2xl">{props.title}</h2>
            {props.relatedVideoId && (
              <ExternalLink
                link={`https://www.youtube.com/watch?v=${props.relatedVideoId}`}
              >
                <YouTubeIcon />
              </ExternalLink>
            )}
          </div>
          <p className="my-3">{props.description}</p>
          {locked && (
            <div className="mt-3">
              {props.costHeadline && (
                <p className="font-TY font-bold">{props.costHeadline}</p>
              )}
              <p className="font-TY font-bold mt-2">What's inside</p>
              <ul className="list-disc list-inside">
                {teaserBullets(props).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {props.costBreakdown && props.costBreakdown.length > 0 && (
                // Placeholder bars only: no real values behind them.
                <button
                  type="button"
                  onClick={scrollToSignIn}
                  className="block w-full text-left mt-3"
                  aria-label="Sign in to see the cost breakdown"
                >
                  <div className="space-y-2" aria-hidden="true">
                    {[80, 65, 72].map((width) => (
                      <div
                        key={width}
                        className="h-3 rounded bg-grey/40"
                        style={{ width: `${width}%` }}
                      />
                    ))}
                  </div>
                  <p className="mt-2 text-sm font-bold">
                    {`Sign in free to see all ${props.costBreakdown.length} costs`}
                  </p>
                </button>
              )}
            </div>
          )}
          {!locked && props.costBreakdown && props.costBreakdown.length > 0 && (
            <div className="mt-3">
              <p className="font-TY font-bold">Cost Breakdown</p>
              {groupCostBreakdown(props.costBreakdown).map((group, idx) => (
                <div key={idx} className={idx > 0 ? "mt-2" : undefined}>
                  {group.region && (
                    <p className="font-TY font-bold text-sm">{group.region}</p>
                  )}
                  <ul className="list-disc list-inside">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        {item.label}: {item.amount}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
              {locked && (
                <button
                  type="button"
                  onClick={scrollToSignIn}
                  className="pr-1 mt-1 whitespace-nowrap"
                >
                  Sign in to download
                </button>
              )}
              {!locked && props.assets.map((asset) => (
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
