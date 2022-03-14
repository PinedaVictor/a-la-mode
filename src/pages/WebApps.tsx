import React from "react";
import { HeaderNav } from "../components";
import { WebDisplay } from "../components/elements";

export const WebApps: React.FC = () => {
  return (
    <>
      <HeaderNav />
      <div className="grid md:grid-cols-3">
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <WebDisplay />
        ))}
      </div>
    </>
  );
};
