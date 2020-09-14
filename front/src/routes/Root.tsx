import * as React from "react";
import Main from "components/Main";
import Header from "components/common/navbar/Header";
import Footer from "components/common/navbar/Footer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const Root: React.FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={Main} />
      <Redirect path="*" to="/" />
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default Root;
