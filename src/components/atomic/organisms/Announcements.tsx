import { type FC } from "react";
import { Link } from "@tanstack/react-router";
import { announcementsConfig } from "../../../configs/announcements";

export const Announcements: FC = () => {
  return (
    <div className="h-full w-full overflow-y-auto bg-offWhite px-6 py-8 md:px-10 md:py-10">
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
