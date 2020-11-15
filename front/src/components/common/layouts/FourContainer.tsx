import React, { Component } from "react";
import styled from "styled-components";
import SmallImage from "components/common/cards/SmallImage";

export default class FourContainer extends Component {
  render() {
    return (
      <GridWrapper>
        <GridTitle>제품 카테고리</GridTitle>
        <Container>
          <SmallImage product_id={1}></SmallImage>
          <SmallImage product_id={1}></SmallImage>
          <SmallImage product_id={1}></SmallImage>
          <SmallImage product_id={1}></SmallImage>
          <SmallImage product_id={1}></SmallImage>
          <SmallImage product_id={1}></SmallImage>
          <SmallImage product_id={1}></SmallImage>
          <SmallImage product_id={1}></SmallImage>
          <SmallImage product_id={1}></SmallImage>
        </Container>
      </GridWrapper>
    );
  }
}
const GridWrapper = styled.div``;
const GridTitle = styled.div`
  padding: 20px 0 10px;
  border-bottom: 1px solid lightgrey;
`;
const Container = styled.div`
  margin-top: 15px;
  display: table;
  width: calc(100% + 20px);
`;
