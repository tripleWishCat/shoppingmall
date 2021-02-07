import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BasicButton from "components/buttons/BasicButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderUtil>
          <HeaderUtilInner className="nav-top">
            <UtilLeft>
              <BasicButton message="바로가기" href="/" />
              <BasicButton message="공지사항" href="/board/notice" />
              <BasicButton message="상품 Q&A" href="/board/question" />
              <BasicButton message="로그인" href="/member/login" />
            </UtilLeft>
            <UtilRight>
              <BasicButton message="회원가입" href="/member/join" />
              <BasicButton message="주문조회" href="/myshop" />
            </UtilRight>
          </HeaderUtilInner>
        </HeaderUtil>
        <Logo src={require("assets/images/logo_header.gif")} />
        <HeaderMenu>
          <HeaderMenuInner>
            <HeaderLeft>
              <Category className="category">
                <BasicButton message="선물세트" href="/product" />
                <BasicButton message="크림 떡" href="/product" />
                <BasicButton message="구워먹는 떡" href="/product" />
                <BasicButton message="끼니떡" href="/product" />
                <BasicButton message="청년제과" href="/product" />
                <BasicButton message="발렌타인" href="/product" />
              </Category>
            </HeaderLeft>
            <HeaderRight>
              <MenuRight>
                <Search>
                  <TextField></TextField>
                  <Link to="">
                    <SearchIcon></SearchIcon>
                  </Link>
                </Search>
                <Cart>
                  <Link to="/order/basket">
                    <ShoppingCartIcon></ShoppingCartIcon>
                  </Link>
                </Cart>
              </MenuRight>
            </HeaderRight>
          </HeaderMenuInner>
        </HeaderMenu>
      </HeaderWrapper>
    );
  }
}

const HeaderWrapper = styled.div`
  /* Shape */
  width: 100%;
  /* height: 10vh; */
  color: black;
  background-color: white;
  /* border-bottom: 1px solid lightgrey; */

  /* position */
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const HeaderUtil = styled.div`
  width: 100%;
  background: #fff;
  z-index: 2;
`;

const HeaderUtilInner = styled.div`
  position: relative;
  width: 90%;
  max-width: 1240px;
  min-width: 960px;
  height: 40px;
  margin: 0 auto;
  color: #666666;
`;

const UtilLeft = styled.div`
  position: absolute;
  left: 0;
`;

const UtilRight = styled.div`
  position: absolute;
  right: 0;
`;

const HeaderMenu = styled.div`
  width: 90%;
  min-width: 100%;
  z-index: 55;
  background: #ffffff;
  border-bottom: 1px solid #ddd;
`;
const HeaderMenuInner = styled.div`
  width: 90%;
  max-width: 1240px;
  min-width: 960px;
  min-height: 57px;
  height: 57px;
  margin: 0 auto;
  padding: 0 0px;
`;
const HeaderLeft = styled.li`
  width: calc(100% - 315px);
  display: inline-block;
`;
const Category = styled.div`
  display: block;
`;
const HeaderRight = styled.li`
  width: 310px;
  display: inline-block;
`;
const MenuRight = styled.div`
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
`;
const Logo = styled.img`
  display: grid;
  place-items: center;
  width: 15%;
  max-height: 30px;
  text-align: center;
  margin: 0 10px;
`;

const Search = styled.div``;
const Cart = styled.div``;
