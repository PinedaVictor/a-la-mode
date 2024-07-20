import { type FC } from "react";

const Badgee = () => {
  return (
    <>
      <span className="inline-flex h-6 items-center rounded-full px-2 py-1 text-xs font-medium bg-grey">
        In Progress
      </span>
    </>
  );
};

type Props = {
  text: string;
  color: "blue" | "green" | "yellow" | "grey";
};
export const Badge: FC<Props> = (props) => {
  let style = "";
  switch (props.color) {
    case "blue":
      style =
        "inline-flex h-6 text-offWhite items-center rounded-full px-2 py-1 text-xs font-medium bg-blue";
      break;
    case "green":
      style =
        "inline-flex h-6 text-satBlack items-center rounded-full px-2 py-1 text-xs font-medium bg-green";
      break;
    case "yellow":
      style =
        "inline-flex h-6 items-center rounded-full px-2 py-1 text-xs font-medium bg-yellow";
      break;
    case "grey":
      style =
        "inline-flex h-6 items-center rounded-full px-2 py-1 text-xs font-medium bg-grey";
      break;
    default:
      style = "";
      break;
  }
  return <span className={style}>{props.text}</span>;
};
