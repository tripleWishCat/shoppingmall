import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export default class Footer extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <FooterWrapper>
        <Notice>공지사항 및 계좌</Notice>
        <Contact>연락처 및 대표</Contact>
      </FooterWrapper>
    );
  }
}
const FooterWrapper = styled.div`
  /* shape */
  height: 30vh;
  width: 100%;
  color: black;
  background-color: white;

  /* position */
  bottom: 0;
  position: relative;

  /* 임시 center alignment */
  display: grid;
  place-items: center;
`;
const Notice = styled.div`
  display: grid;
  place-items: center;
  border-top: 1px solid lightgrey;
  background-color: white;
  width: 100%;
  height: 15vh;
`;

const Contact = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 15vh;
  background-color: lightgrey;
`;
