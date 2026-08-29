import { type FC } from "react";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getApp } from "firebase/app";
import { Comment } from "../../elements/clients/Comment";
import { MsgIcon } from "../../../assets/icons/MsgIcon";
import { useContactModal } from "../../header/ContactModalContext";

type Props = {
  // Distinguishes this CTA's clicks from the others in GA4's select_content
  // events (e.g. "collab-chat-cta", "travel-guides-chat-cta").
  contentType: string;
  className?: string;
};

export const ChatWithMeCTA: FC<Props> = ({
  contentType,
  className = "flex items-end gap-2"
}) => {
  const { toggleContact } = useContactModal();

  const handleClick = () => {
    toggleContact();
    logEvent(getAnalytics(getApp()), "select_content", {
      content_type: contentType
    });
  };

  return (
    <button onClick={handleClick} aria-label="Open contact form" className={className}>
      <div className="scale-90">
        <Comment comment="chat with me here 👉" />
      </div>
      <div className="scale-125">
        <MsgIcon />
      </div>
    </button>
  );
};
