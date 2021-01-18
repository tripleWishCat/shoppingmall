import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SmallImage from "../cards/SmallImage";
import { getOneData } from "api/ProductApi";
import { getSearchData } from "api/ProductApi";
import { AxiosResponse } from "axios";

interface Iproduct {}
const fetchData = async () => {
  const response = await getSearchData();
  return response;
};

function FourContainer({ ...props }: Iproduct) {
  const [data, setData] = useState<AxiosResponse>();
  useEffect(() => {
    // const fetchedData = async () => {
    //   const response = await fetchData();
    //   return response;
    // };
    fetchData().then((res) => setData(res));

    // if (!data) {
    //   const getData = getOneData(1).then((res) => {
    //     fetchData(res[0]);
    //     getImgUrl(res[0].TUMB_IMG);
    //   });
    // }
    // console.log(data);
    // if (searchData === []) {
    //   const fetchData = async () => {
    //     const fetchedData = await getSearchData();
    //     console.log(fetchedData);
    //     fetchSearchData(fetchedData);
    //   };
    // }
    // console.log(searchData);
  }, []);
  console.log(data);
  return (
    <GridWrapper>
      <GridTitle>제품 카테고리</GridTitle>
      <Container>
        <Link to={`/product/${1}`}>
          <SmallImage imageUrl={data.data[0]} />
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
