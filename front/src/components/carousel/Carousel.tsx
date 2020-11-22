import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
interface CarouselProps {
  page: number;
}

interface CarouselState {
  ellipsis: boolean;
}
// <CarouselState, CarouselProps>


export default class Carousel extends Component {
  static propTypes = {};

  render() {
    return (
      <CarouselWrapper src={require("assets/images/banner01.jpg")} />
    );
  }
}
const CarouselWrapper = styled.img`
  /* shape */
  width: 100%;
  
`;
// const CarouselWrapper = styled.div`
//   /* shape */
//   width: 100%;
//   height: 30vh;
//   background-color: lightgrey;
// 	margin-bottom:1rem;

//   /* position */
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   justify-content: center;
// `;
