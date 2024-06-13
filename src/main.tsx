import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.tsx";
import "./index.css";
import ChillContextProvider from "./context/ChillContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChillContextProvider>
      <App />
      <Analytics />
    </ChillContextProvider>
  </React.StrictMode>
);
