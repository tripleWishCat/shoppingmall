import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Carousel from "../components/carousel/Carousel";
import FourContainer from "../components/layouts/FourContainer";
import { getSearchData } from "api/ProductApi";
import product from "types/product";

export default function Main() {
  useEffect(() => {
    const getProductData = async function () {
      const response = await getSearchData().then((res) => {
        setData(res.data);
      });
    };
    getProductData();
  }, []);
  const [data, setData] = useState<[product]>();
  return (
    <>
      <MainWrapper>
        <Carousel />
        {data ? <FourContainer data={data} /> : <FourContainer data={[]} />}
      </MainWrapper>
    </>
  );
}
const MainWrapper = styled.div`
  width: 100%;
`;
