import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";

let theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Playfair Display SC",
    },
    h2: {
      fontFamily: "Playfair Display SC",
    },
    h3: {
      fontFamily: "Playfair Display SC",
    },
    title: {
      fontFamily: "Lily Script One",
      fontSize: 100
    },
    accentButton: {
      fontFamily: "Lily Script One",
      fontSize: 30
    },
  },
});

theme = responsiveFontSizes(theme, {
  breakpoints: ["xs", "sm", "md", "lg"],
  factor: 3,
  disableAlign: true,
  variants: ["h1", "h2", "h3", "h4", "title", "accentButton"],
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
