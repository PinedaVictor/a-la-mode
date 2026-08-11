import { createLazyFileRoute } from "@tanstack/react-router";
import { TravelPage } from "../pages";

export const Route = createLazyFileRoute("/travel")({
  component: TravelPage,
});
