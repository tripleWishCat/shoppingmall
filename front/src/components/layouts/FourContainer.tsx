import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProductImage from "../cards/ProductImage";

import product from "types/product";
interface Iproduct {
  data: Array<product>;
}

function FourContainer({ ...props }: Iproduct) {
  return (
    <GridWrapper>
      <GridTitle>제품 카테고리</GridTitle>
      <Container>
        {props.data.map((item) => (
          <Link key={item.PROD_ID} to={`/product/${item.PROD_ID}`}>
            <ProductImage data={[item]} />
            <p>
              <h3>{props.data[0].TITLE}</h3>
            </p>
            <p>{props.data[0].SUB_TITLE}</p>
            <p>{props.data[0].PRICE}원</p>
          </Link>
        ))}
      </Container>
    </GridWrapper>
  );
}
export default FourContainer;

const GridWrapper = styled.div``;
const GridTitle = styled.div`
  padding: 20px 0 10px;
  border-bottom: 1px solid lightgrey;
`;
const Container = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1em;
  width: calc(100% + 20px);
`;
