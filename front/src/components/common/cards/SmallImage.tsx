import React, { Component } from "react";
import styled from "styled-components";

// interface ImageProps {
//   message: string;
// }

// interface ImageState {
//   ellipsis: boolean;
// }
// <ImageProps, ImageState>

class ImageCard extends Component {
  state = {
    ellipsis: false,
  };

  render() {
    return (
      <CardContainer>
        <Image src="https://item.kakaocdn.net/do/a4f929470c263313e72afbf74ae34d79f43ad912ad8dd55b04db6a64cddaf76d" />
        <CardText>Lorem ipsum dolor</CardText>
      </CardContainer>
    );
  }
}

export default ImageCard;

const CardContainer = styled.div`
  width: 25%;
  position: relative;
  display: inline-block;
  margin: 0 0 40px;
  overflow: hidden;
  /* justify-content: center;
  align-items: center; */
`;

const Image = styled.img`
  position: relative;
  margin: 10px 10px;
  text-align: center;

  /* display:block;
text-align:center;
  position: relative;
  overflow:hidden;
  box-sizing: border-box;
  margin: 10px 10px;
  width: 100%; */
  /* object-fit: cover;
  width: 295px;
  height: 295px; */
`;

const CardText = styled.div``;
