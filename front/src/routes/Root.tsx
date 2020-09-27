import * as React from "react";
import styled from "styled-components";
import Main from "components/Main";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const Root: React.FC = () => (
  <BrowserRouter>
    <Wrapper>
      <Container>
        <Switch>
          <Route path="/" exact component={Main} />
          <Redirect path="*" to="/" />
        </Switch>
      </Container>
    </Wrapper>
  </BrowserRouter>
);

export default Root;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 90%;
  max-width: 1240px;
  min-width: 960px;
  margin: 0 auto;
`;
