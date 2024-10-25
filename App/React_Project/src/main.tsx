import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
//import App from "./App.tsx";

import CounterApp from "./components/CounterApp/CounterApp.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CounterApp value={8} />
  </StrictMode>
);
