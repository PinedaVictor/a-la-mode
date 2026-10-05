import "./styles/index.css";
import "./styles/App.css";
import "./components/firebase/config";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app. #root may already hold prerendered HTML (scripts/prerender.mjs);
// load the matched route's lazy chunk first so React swaps that markup for the
// live app in one commit instead of flashing an empty page. Render even if the
// preload fails (e.g. a chunk from a stale deploy), so the page never stays
// stuck as a non-interactive snapshot; the router shows its own error state.
const rootElement = document.getElementById("root")!;
router
  .load()
  .catch((error) => console.error("Route preload failed:", error))
  .finally(() => {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    );
  });
