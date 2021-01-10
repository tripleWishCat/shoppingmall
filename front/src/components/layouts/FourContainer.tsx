import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SmallImage from "../cards/SmallImage";
import { getOneData } from "api/ProductApi";

interface Iproduct {}
function FourContainer({ ...props }: Iproduct) {
  const [data, fetchData] = useState<string>("");
  if (data.length == 0) {
    const getData = getOneData(1).then((res) => {
      fetchData(res.TUMB_IMG);
    });
  }

  // const [data, fetchData] = useState([]);
  // if (data.length == 0) {
  //   const getData = getOneData(1).then((res) => {
  //     fetchData(res);
  //     return;
  //   });
  // }
  return (
    <GridWrapper>
      <GridTitle>제품 카테고리</GridTitle>
      <Container>
        <Link to={`/product/${1}`}>
          <SmallImage imageUrl={data} />
        </Link>
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
