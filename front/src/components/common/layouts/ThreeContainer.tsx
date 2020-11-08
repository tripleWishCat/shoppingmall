import React, { Component } from "react";
import styled from "styled-components";
import BigImage from "components/common/cards/BigImage";
import PropTypes from "prop-types";

export default class ThreeContainer extends Component {
  static propTypes = {};

  render() {
    return (
      <GridWrapper>
        <GridTitle>제품 카테고리</GridTitle>
        <Container>
          <BigImage></BigImage>
          <BigImage></BigImage>
          <BigImage></BigImage>
          <BigImage></BigImage>
          <BigImage></BigImage>
          <BigImage></BigImage>
          <BigImage></BigImage>
        </Container>
      </GridWrapper>
    );
  }
}
const GridWrapper = styled.div`
  width: 100%;
`;
const GridTitle = styled.div`
  padding: 20px 0 10px;
  border-bottom: 1px solid lightgrey;
`;
const Container = styled.div`
  margin-top: 15px;
  display: table;
  width: calc(100% + 20px);
`;
