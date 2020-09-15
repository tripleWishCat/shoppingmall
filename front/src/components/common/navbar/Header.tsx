import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <HeaderWrapper>
      <HeaderUtil>
        <HeaderUtilInner>
          <UtilLeft>웅앵 웅앵 왼쪽</UtilLeft>
          <UtilRight>웅앵 웅앵 오른쪽</UtilRight>
        </HeaderUtilInner>
      </HeaderUtil>
      <HeaderMenu>
      </HeaderMenu>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 10vh;
  background-color: white;
  color: black;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const HeaderUtil = styled.div`
  width: 100%;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const HeaderUtilInner = styled.div`
  width: 90%;
  max-width: 1240px;
  min-width: 960px;
  color: grey;
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const UtilLeft = styled.div``;
const UtilRight = styled.div``;

const HeaderMenu = styled.div`
  min-width: 100%;
  width: 90%;
`;
