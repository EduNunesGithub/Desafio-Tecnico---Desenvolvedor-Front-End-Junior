import { StrictMode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { queryClient } from "./lib/react-query";
import { Leads } from "./pages/Leads/Leads.tsx";
import "react-loading-skeleton/dist/skeleton.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            element={<App />}
            index
            path="/"
          />

          <Route
            element={<Leads />}
            path="/leads"
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
