import React, { createContext, useState } from "react";

type ImageProviderProps = {
  children: React.ReactNode;
};

// FIXME: The type definition?
type ImageContext = [
  any,
  React.Dispatch<React.SetStateAction<boolean | any>>,
  any,
  React.Dispatch<React.SetStateAction<string | any>>
];
export const ImageContext = createContext<ImageContext>([
  false,
  () => {},
  "",
  () => {},
]);

export const ImageProvider: React.FC<ImageProviderProps> = (props) => {
  const [image, setImage] = useState(false);
  const [imgURL, setImgURL] = useState("");
  return (
    <>
      <ImageContext.Provider value={[image, setImage, imgURL, setImgURL]}>
        {props.children}
      </ImageContext.Provider>
    </>
  );
};
