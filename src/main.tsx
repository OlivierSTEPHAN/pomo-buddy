import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ChillContextProvider from "./context/ChillContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChillContextProvider>
      <App />
    </ChillContextProvider>
  </React.StrictMode>
);
