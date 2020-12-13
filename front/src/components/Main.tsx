import * as React from "react";
import styled from "styled-components";
import Carousel from "components/common/carousel/Carousel";
import FourContainer from "components/common/layouts/FourContainer";
const Main: React.FC = () => (
  <MainWrapper>
    <Carousel />
    <FourContainer />
  </MainWrapper>
);
export default Main;
const MainWrapper = styled.div`
  width: 100%;
`;
