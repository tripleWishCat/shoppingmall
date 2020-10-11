import * as React from "react";
import styled from "styled-components";
import Main from "components/Main";
import Notice from "components/board/Notice";
import Question from "components/board/Question";
import Join from "components/member/Join";
import Login from "components/member/Login";
import Myshop from "components/myshop/Myshop";
import Basket from "components/order/Basket";
import Orders from "components/order/Orders";
import ProductInfo from "components/product/ProductInfo";
import ShopInfo from "components/shopinfo/ShopInfo";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const Root: React.FC = () => (
  <BrowserRouter>
    <Wrapper>
      <Container>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/board/notice" exact component={Notice} />
          <Route path="/board/question" exact component={Question} />
          <Route path="/member/join" exact component={Join} />
          <Route path="/member/login" exact component={Login} />
          <Route path="/myshop" exact component={Myshop} />
          <Route path="/order/basket" exact component={Basket} />
          <Route path="/order/orders" exact component={Orders} />
          <Route path="/product" exact component={ProductInfo} />
          <Route path="/shopinfo" exact component={ShopInfo} />
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
