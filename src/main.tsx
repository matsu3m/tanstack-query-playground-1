import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");

rootElement &&
  createRoot(rootElement).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <Notifications />
          <App />
        </MantineProvider>
      </QueryClientProvider>
    </StrictMode>,
  );
