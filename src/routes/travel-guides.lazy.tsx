import { createLazyFileRoute } from "@tanstack/react-router";
import { TravelGuidesPage } from "../pages";

export const Route = createLazyFileRoute("/travel-guides")({
  component: TravelGuidesPage,
});
