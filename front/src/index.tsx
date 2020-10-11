import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "styles/GlobalStyles";
import theme from "styles/theme";
import { ThemeProvider } from "styles/theme-components";
import Root from "routes/Root";
import Header from "components/common/navbar/Header";
import Footer from "components/common/navbar/Footer";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Header />
      <Root />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
