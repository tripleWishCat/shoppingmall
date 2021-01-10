import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BasicButton from "components/buttons/BasicButton";

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderUtil>
          <HeaderUtilInner>
            <UtilLeft>
              <Link to="/">
                <BasicButton message="바로가기+" />
              </Link>
              <Link to="/board/notice">
                <BasicButton message="공지사항" />
              </Link>
              <Link to="/board/question">
                <BasicButton message="상품 Q&A" />
              </Link>
              <Link to="/member/login">
                <BasicButton message="로그인" />
              </Link>
            </UtilLeft>
            <UtilRight>
              <Link to="/member/join">
                <BasicButton message="회원가입" />
              </Link>
              <Link to="/myshop">
                <BasicButton message="주문조회" />
              </Link>
            </UtilRight>
          </HeaderUtilInner>
        </HeaderUtil>
        <HeaderMenu>
          <HeaderLeft>
            <Hamburger>|||</Hamburger>
            <Link to="/product">
              <BasicButton message="제품전체" />
            </Link>
            <Link to="/product">
              <BasicButton message="퓨전 떡" />
            </Link>
            <Link to="/product">
              <BasicButton message="전통 떡" />
            </Link>
            <Link to="/product">
              <BasicButton message="청년제과" />
            </Link>
            <Link to="/product">
              <BasicButton message="선물세트" />
            </Link>
          </HeaderLeft>
          <Logo src={require("assets/images/logo_header.gif")} />
          <HeaderRight>
            <Link to="/product">
              <BasicButton message="검색" />
            </Link>
            <Link to="/order/basket">
              <BasicButton message="장바구니" />
            </Link>
          </HeaderRight>
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
  border-bottom: 1px solid lightgrey;

  /* position */
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
`;

const HeaderUtil = styled.div`
  /* shape */
  color: white;
  width: 90%;
  max-width: 1240px;
  min-width: 960px;
  /* position */
  justify-content: center;
  align-items: center;
  display: flex;
`;

const HeaderUtilInner = styled.div`
  /* shape */
  color: grey;
  width: 100%;

  /* position */
  display: flex;
  position: relative;
  justify-content: space-between;
`;

const UtilLeft = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const UtilRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const HeaderMenu = styled.div`
  width: 90%;
  max-width: 1240px;
  min-width: 960px;
  justify-content: space-between;
  display: flex;

  /* 임시 */
  margin: 2.5em 0 2.5em 0;
`;

const HeaderLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 40%;
`;
const HeaderRight = styled.div`
  justify-content: flex-end;
  display: flex;
  width: 40%;
`;

const Logo = styled.img`
  display: grid;
  place-items: center;
  width: 15%;
`;

const Hamburger = styled.div`
  /* 햄버거 버튼  */
`;
