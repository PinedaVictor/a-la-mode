import { createLazyFileRoute } from "@tanstack/react-router";
import { ProjectsPage } from "../pages";

export const Route = createLazyFileRoute("/projects")({
  component: ProjectsPage,
});
