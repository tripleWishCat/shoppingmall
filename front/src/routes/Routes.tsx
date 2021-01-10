import * as React from "react";
import styled from "styled-components";
import Main from "../containers/Main";
import Notice from "containers/board/Notice";
import Question from "containers/board/Question";
import Join from "containers/member/Join";
import Login from "containers/member/Login";
import Myshop from "containers/myshop/Myshop";
import Basket from "containers/order/Basket";
import Orders from "containers/order/Orders";
import ProductInfo from "containers/product/ProductInfo";
import ShopInfo from "containers/shopinfo/ShopInfo";
import Header from "components/navbar/Header";
import Footer from "components/navbar/Footer";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Header />
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
    <Footer />
  </BrowserRouter>
);

export default Routes;

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
