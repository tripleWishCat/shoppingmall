import * as React from "react";
import styled from "styled-components";
import Carousel from "../components/carousel/Carousel";
import FourContainer from "../components/layouts/FourContainer";

interface mainState {}
export default class Main extends React.Component<mainState> {
  constructor(props: mainState) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <MainWrapper>
        <Carousel />
        <FourContainer />
      </MainWrapper>
    );
  }
}

const MainWrapper = styled.div`
  width: 100%;
`;
