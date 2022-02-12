import React from "react";
import { Service } from "./Service";

export const Services: React.FC = () => {
  return (
    <>
      <h3>Services</h3>
      <section className=" grid lg:grid-cols-2">
        {/* TODO: Implement service component, don't go with a grid view - this is weak don't be afraid to let the design breath */}
        {[1, 2, 3].map((item) => (
          <Service />
        ))}
      </section>
    </>
  );
};
