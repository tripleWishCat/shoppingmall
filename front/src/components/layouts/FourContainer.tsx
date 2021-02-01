import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SmallImage from "../cards/SmallImage";

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
            <SmallImage data={[item]} />
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
  display: table;
  width: calc(100% + 20px);
`;
