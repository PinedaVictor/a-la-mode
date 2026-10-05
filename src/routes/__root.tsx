import { createRootRoute, Outlet } from "@tanstack/react-router";
import { RouteMeta } from "../components/RouteMeta";
import { NotFound } from "../pages/NotFound";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <RouteMeta />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
  notFoundComponent: NotFound,
});
