import React, { useContext } from "react";
import { ImageContext } from "./ImageProvider";

interface ArtPieceProps {
  altText: string;
  imageURL: string;
}

export const ArtPiece: React.FC<ArtPieceProps> = (props) => {
  // Image context is made of two state and setState variables
  const [, setImage, , setImgURL] = useContext(ImageContext);
  return (
    <>
      <div className="">
        <picture
          onClick={() => {
            setImage(true);
            setImgURL(props.imageURL);
          }}
        >
          <source type="image/webp" srcSet={props.imageURL} />
          <img src={props.imageURL} alt={props.altText} />
        </picture>
      </div>
    </>
  );
};
