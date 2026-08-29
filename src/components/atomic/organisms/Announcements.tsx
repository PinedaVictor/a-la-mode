import { type FC, useLayoutEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getApp } from "firebase/app";
import { Comment } from "../../elements/clients/Comment";
import { MsgIcon } from "../../../assets/icons/MsgIcon";
import { useContactModal } from "../../header/ContactModalContext";
import { useScrollReveal } from "../../header/ScrollRevealContext";
import { announcementsConfig } from "../../../configs/announcements";

const HEADER_HEIGHT = 56;

export const Announcements: FC = () => {
  const { toggleContact } = useContactModal();
  const { setChatRevealed } = useScrollReveal();
  const ctaRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (!ctaRef.current) return;
      const { top } = ctaRef.current.getBoundingClientRect();
      setChatRevealed(top <= HEADER_HEIGHT);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setChatRevealed]);

  const handleClick = () => {
    toggleContact();
    logEvent(getAnalytics(getApp()), "select_content", {
      content_type: "announcements-chat-cta"
    });
  };

  return (
    <div className="h-full w-full overflow-y-auto bg-offWhite px-6 pt-16 pb-8 md:px-10 md:pt-20 md:pb-10">
      <button
        ref={ctaRef}
        onClick={handleClick}
        aria-label="Open contact form"
        className="flex items-end justify-center gap-2 pb-10 w-full"
      >
        <div className="scale-90">
          <Comment comment="chat with me here 👉" />
        </div>
        <div className="scale-125">
          <MsgIcon />
        </div>
      </button>
      <p className="underline font-BN text-2xl mb-6">Updates</p>
      <ul className="flex flex-col gap-6">
        {announcementsConfig.map((item) => (
          <li key={item.title} className="border-b border-grey pb-4">
            <p className="font-SFR text-xs uppercase tracking-wide text-offBlack/60">
              {item.date}
            </p>
            {item.link ? (
              <Link to={item.link}>
                <p className="font-SFR text-lg font-bold underline">
                  {item.title}
                </p>
              </Link>
            ) : (
              <p className="font-SFR text-lg font-bold">{item.title}</p>
            )}
            {item.body && (
              <p className="font-SFR text-sm mt-1">{item.body}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
