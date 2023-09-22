import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App.tsx";
import "./styles/test.scss";
import "./styles/test2.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
