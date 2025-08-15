import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/Router";
import MouseBurst from "./animation/MouseBurst";
import FluidCursor from "./animation/FluidCursor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const quearyClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={quearyClient}>
      <MouseBurst />
      <FluidCursor>
        <RouterProvider router={router} />
      </FluidCursor>
    </QueryClientProvider>
  </StrictMode>
);
