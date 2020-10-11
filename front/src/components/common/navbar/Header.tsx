import React, { Component } from "react";
import styled from "styled-components";
import LinkButton from "components/common/buttons/LinkButton";

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderUtil>
          <HeaderUtilInner>
            <UtilLeft>
              <LinkButton name="바로가기+" linkto="/" />
              <LinkButton name="공지사항" linkto="/board/notice" />
              <LinkButton name="상품 Q&A" linkto="/board/question" />
            </UtilLeft>
            <UtilRight>
              <LinkButton name="로그인" linkto="/member/login" />
              <LinkButton name="회원가입" linkto="/member/join" />
              <LinkButton name="주문조회" linkto="/myshop" />
            </UtilRight>
          </HeaderUtilInner>
        </HeaderUtil>
        <HeaderMenu>
          <HeaderLeft>
            <Hamburger>|||</Hamburger>
            <LinkButton name="제품전체" linkto="/product" />
            <LinkButton name="퓨전 떡" linkto="/product" />
            <LinkButton name="전통 떡" linkto="/product" />
            <LinkButton name="청년제과" linkto="/product" />
            <LinkButton name="선물세트" linkto="/product" />
          </HeaderLeft>
          <Logo src={require("assets/images/logo.gif")} />
          <HeaderRight>
            <LinkButton name="검색" linkto="/product" />
            <LinkButton name="장바구니" linkto="/order/basket" />
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
  justify-content: center;
  place-items: center;
  width: 15%;
`;

const Hamburger = styled.div`
  /* 햄버거 버튼  */
`;
