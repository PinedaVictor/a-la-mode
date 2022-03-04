import React from "react";
import { Service } from "./Service";

const serviceData = [
  {
    serviceNumber: 1,
    summery:
      "Bacon ipsum dolor amet prosciutto pork turducken, leberkas corned beef" +
      "biltong spare ribs capicola brisket. Venison chuck t-bone jerky cow" +
      "short loin drumstick shank short ribs andouille. Tail jerky strip" +
      "steak sirloin beef drumstick venison chuck. Corned beef ground round" +
      "prosciutto, andouille pastrami chicken drumstick shoulder beef shankle" +
      "chuck hamburger capicola.",
  },
  {
    serviceNumber: 2,
    summery:
      "Bacon ipsum dolor amet prosciutto pork turducken, leberkas corned beef" +
      "biltong spare ribs capicola brisket. Venison chuck t-bone jerky cow" +
      "short loin drumstick shank short ribs andouille. Tail jerky strip" +
      "steak sirloin beef drumstick venison chuck. Corned beef ground round" +
      "prosciutto, andouille pastrami chicken drumstick shoulder beef shankle" +
      "chuck hamburger capicola.",
  },
  {
    serviceNumber: 3,
    summery:
      "Bacon ipsum dolor amet prosciutto pork turducken, leberkas corned beef" +
      "biltong spare ribs capicola brisket. Venison chuck t-bone jerky cow" +
      "short loin drumstick shank short ribs andouille. Tail jerky strip" +
      "steak sirloin beef drumstick venison chuck. Corned beef ground round" +
      "prosciutto, andouille pastrami chicken drumstick shoulder beef shankle" +
      "chuck hamburger capicola.",
  },
];

export const Services: React.FC = () => {
  return (
    <>
      <section className=" grid">
        {/* TODO: Implement service component, don't go with a grid view - this is weak don't be afraid to let the design breath */}
        {serviceData.map((service) => (
          <Service
            serviceNumber={service.serviceNumber}
            summary={service.summery}
          />
        ))}
      </section>
    </>
  );
};
