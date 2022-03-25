import React from "react";
import { Service } from "./Service";

const serviceData = [
  {
    serviceNumber: 1,
    summery: "Digital asset creation and managment",
  },
  {
    serviceNumber: 2,
    summery: "Advisement ",
  },
  {
    serviceNumber: 3,
    summery: "",
  },
];

export const Services: React.FC = () => {
  return (
    <>
      <section className=" grid">
        {/* TODO: Implement service component, don't go with a grid view - this is weak don't be afraid to let the design breath */}
        {serviceData.map((service, index) => (
          <Service
            key={index}
            serviceNumber={service.serviceNumber}
            summary={service.summery}
          />
        ))}
      </section>
    </>
  );
};
