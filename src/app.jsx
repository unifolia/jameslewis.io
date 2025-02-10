import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Portfolio from "./Portfolio.jsx";
import LangProvider from "./context/languages.jsx";
import ColorProvider from "./context/theme.jsx";
import consolePrinter from "./weirdos/console.jsx";

import "./styles.css";

consolePrinter();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorProvider>
      <LangProvider>
        <Portfolio />
      </LangProvider>
    </ColorProvider>
  </StrictMode>
);
