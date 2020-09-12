import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "styles/GlobalStyles";
import theme from "styles/theme";
import { ThemeProvider } from "styles/theme-components";
import Root from "routes/Root";
// import {Provider } from "react-mobx"

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
