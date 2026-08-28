import { type FC, useEffect, useState } from "react";
import { useDrag } from "@use-gesture/react";

import img1 from "../../../assets/images/lifestyle/IMG_5932.jpg";
import img2 from "../../../assets/images/Art/andres.jpg";

const images = [
  {
    image: img1,
    text: "Château de Vaux-le-Vicomte in Maincy, France"
  },
  {
    image: img2,
    text: "Build in public."
  }
];

export const SplitImageCarousel: FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const previous = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  const bind = useDrag((state) => {
    if (state._direction[0] > 0) {
      previous();
    } else {
      next();
    }
  });

  useEffect(() => {
    const timer = setTimeout(next, 3000);
    return () => clearTimeout(timer);
  }, [index]);

  const current = images[index];

  return (
    <div {...bind()} className="flex flex-col h-full w-full touch-pan-y">
      <div className="flex-1 min-h-0">
        <img
          src={current.image}
          // TODO: Alt text in data object
          alt="Make sure alt text is in data"
          className="object-cover h-full w-full"
        />
      </div>
      <div className="p-3">
        <p className="bg-satBlack/60 rounded-md text-offWhite font-[Tommy] text-xl px-3 py-2">
          {current.text}
        </p>
      </div>
    </div>
  );
};
