import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default class Header extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <HeaderWrapper>
        <HeaderUtil>
          <HeaderUtilInner>
            <UtilLeft>사이드바 좌측</UtilLeft>
            <UtilRight>사이드바 우측</UtilRight>
          </HeaderUtilInner>
        </HeaderUtil>
        <HeaderMenu>
          <MenuItem>Header Menu</MenuItem>
          <MenuItem>Header Menu</MenuItem>
          <MenuItem>Header Menu</MenuItem>
          <Logo>Logo</Logo>
          <MenuItem>Header Menu</MenuItem>
          <MenuItem>Header Menu</MenuItem>
          <MenuItem>Header Menu</MenuItem>
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
  background-color: darkgrey;

  /* position */
  display: flex;
  position: relative;
  justify-content: space-between;
`;

const UtilLeft = styled.div`
  padding: 10px;
`;
const UtilRight = styled.div`
  padding: 10px;
`;

const HeaderMenu = styled.div`
  width: 90%;
  max-width: 1240px;
  min-width: 960px;
  background-color: grey;

  display: flex;
  justify-content: center;
`;

const MenuItem = styled.div`
  padding: 40px;
`;
const Logo = styled.div`
  padding: 40px;
  background-color: lightslategrey;
`;
