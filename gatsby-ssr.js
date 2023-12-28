import React from "react";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./my-theme.ts";
import "./src/assets/fonts/fonts.css";
import "./global-styles.css";

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={myTheme}>{element}</ThemeProvider>
);
