import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "styles/GlobalStyles";
import theme from "styles/theme";
import Routes from "routes/Routes";
import { Provider } from "react-redux";
import store from "./store";

import { ThemeProvider } from "styles/theme-components";
import Header from "components/common/navbar/Header";
import Footer from "components/common/navbar/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header />
        <Routes />
        <Footer />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
