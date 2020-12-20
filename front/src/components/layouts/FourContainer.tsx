import React from "react";
import { AxiosResponse } from "axios";
import styled from "styled-components";
import SmallImage from "../cards/SmallImage";
import { getOneData } from "api/ProductApi";

interface Iproduct {}

async function FourContainer({ ...props }: Iproduct) {
  const data = await getOneData(1);

  return (
    <GridWrapper>
      <GridTitle>제품 카테고리</GridTitle>
      <Container>
        <SmallImage imageUrl={data} />
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
