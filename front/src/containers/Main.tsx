import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Carousel from "../components/carousel/Carousel";
import FourContainer from "../components/layouts/FourContainer";
import { getSearchData } from "api/ProductApi";
import product from "types/product";
import ThreeContainer from "components/layouts/ThreeContainer";

export default function Main() {
  const [data, setData] = useState<[product]>();
  useEffect(() => {
    const getProductData = async function () {
      await getSearchData().then((res) => {
        setData(res.data);
      });
    };
    getProductData();
  }, []);

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
