import * as React from "react";
import Main from "components/Main";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/main" exact component={Main} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Root;
