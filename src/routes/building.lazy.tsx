import { createLazyFileRoute } from "@tanstack/react-router";
import { BuildingPage } from "../pages";

export const Route = createLazyFileRoute("/building")({
  component: BuildingPage,
});
