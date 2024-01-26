import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { MatchProvider } from "./providers/matchProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MatchProvider>
      <App />
    </MatchProvider>
  </React.StrictMode>
);
