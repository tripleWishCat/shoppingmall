import * as React from "react";
import styled from "styled-components";
import ImageCard from "components/common/cards/ImageCard";
const Main: React.FC = () => (
  <MainWrapper>
    <MainCarousel></MainCarousel>
    <MainContainer>
      <ContentContainer>
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </ContentContainer>
    </MainContainer>
  </MainWrapper>
);

export default Main;
const MainWrapper = styled.div`
  /* shape */
  width: 100%;
`;
const MainContainer = styled.div`
  width: 100%;
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  display:flex;
`;
const MainCarousel = styled.div`
  width: 100%;
`;

const ContentContainer = styled.div`
  /* shape */
  width: 70vw;
  margin: 50px 0 50px 0;
  flex-flow: column wrap;

  /* alignment */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
