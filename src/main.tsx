import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";
// import "./index.css"; // inactive - global styles are applied in App.tsx

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
