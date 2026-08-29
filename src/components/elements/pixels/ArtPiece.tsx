import React, { useContext } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getApp } from "firebase/app";
import { ImageContext } from "./ImageProvider";

interface ArtPieceProps {
  altText: string;
  imageURL: string;
  etsyLink?: string;
  // Crops the image to this aspect ratio via object-cover (e.g. "aspect-[4/5]")
  // instead of shrinking it, so mismatched source dimensions still line up.
  aspectClassName?: string;
}

export const ArtPiece: React.FC<ArtPieceProps> = (props) => {
  // Image context is made of two state and setState variables
  const [, setImage, , setImgURL] = useContext(ImageContext);

  const handleEtsyClick = () => {
    logEvent(getAnalytics(getApp()), "select_content", {
      content_type: `etsy-listing-${props.altText}`,
    });
  };

  return (
    <>
      <div
        className={`relative ${
          props.aspectClassName ? `${props.aspectClassName} overflow-hidden` : ""
        }`}
      >
        <picture
          onClick={() => {
            setImage(true);
            setImgURL(props.imageURL);
          }}
        >
          <source type="image/webp" srcSet={props.imageURL} />
          <img
            src={props.imageURL}
            alt={props.altText}
            className={props.aspectClassName ? "h-full w-full object-cover" : undefined}
          />
        </picture>
        {props.etsyLink && (
          <a
            href={props.etsyLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleEtsyClick}
            className="absolute bottom-3 right-3 rounded-full bg-orange px-3 py-1 text-xs font-SFR font-bold text-satBlack shadow-md"
          >
            buy on etsy
          </a>
        )}
      </div>
    </>
  );
};
