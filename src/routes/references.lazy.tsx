import { createLazyFileRoute } from "@tanstack/react-router";
import { HappyClients } from "../pages";

export const Route = createLazyFileRoute("/references")({
  component: HappyClients,
});
