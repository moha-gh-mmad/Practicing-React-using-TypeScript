import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.tsx";
import "./index.css";
import Practice from "./Practicing react/Practice.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <div className="my-5"></div>
    <Practice />
  </StrictMode>
);
