import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import "./index.css";
//import App from "./App.tsx";
import "./index.css";

import { GifExpertApp } from "./components/GifExpertApp/GifExpertApp.tsx";
import { Header } from "./components/Prueba_Doc_EQ/Header.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
  </StrictMode>
);
