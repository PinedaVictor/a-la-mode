import React, { createContext, useState } from "react";

// FIXME: The type definition?
// type ImageContext = [any, React.Dispatch<React.SetStateAction<string>>];
const Image = createContext(["", () => {}]);

// FIXME: props is not working. The spread operator???
export const ImageProvider: React.FC<any> = (props) => {
  // FIXME: The type definition?
  const [image, setImage] = useState<any>("");
  return (
    <>
      {/* <ImageCotext.Provider value={[image, setImage]}></ImageCotext.Provider> */}
      <Image.Provider
        value={[image, setImage]}
        {...props.children}
      ></Image.Provider>
    </>
  );
};
