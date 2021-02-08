import React from "react";
import { Provider } from "../context";
import { defaultTheme, themes } from "../constants";

function ThemeProvider({ theme, children }) {
  return <Provider value={theme}>{children}</Provider>;
}

export { ThemeProvider };
