import React, { Component } from "react";
import styled from "styled-components";
import BasicButton from "components/buttons/BasicButton";

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <HeaderUtil>
          <HeaderUtilInner>
            <UtilLeft>
              <BasicButton message="바로가기+" href="/" />
              <BasicButton message="공지사항" href="/board/notice" />
              <BasicButton message="상품 Q&A" href="/board/question" />
            </UtilLeft>
            <UtilRight>
              <BasicButton message="로그인" href="/member/login" />
              <BasicButton message="회원가입" href="/member/join" />
              <BasicButton message="주문조회" href="/myshop" />
            </UtilRight>
          </HeaderUtilInner>
        </HeaderUtil>
        <HeaderMenu>
          <HeaderLeft>
            <Hamburger>|||</Hamburger>
            <BasicButton message="제품전체" href="/product" />
            <BasicButton message="퓨전 떡" href="/product" />
            <BasicButton message="전통 떡" href="/product" />
            <BasicButton message="청년제과" href="/product" />
            <BasicButton message="선물세트" href="/product" />
          </HeaderLeft>
          {/* <a href="/"> */}
          <Logo src={require("assets/images/logo_header.gif")} />
          {/* </a> */}
          <HeaderRight>
            {/* <DefaultButton message="검색" /> */}
            <BasicButton message="검색" href="/product" />
            <BasicButton message="장바구니" href="/order/basket" />
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
