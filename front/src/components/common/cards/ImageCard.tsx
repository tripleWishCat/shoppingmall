import React from "react";
import styled from "styled-components";


interface Props {
}

class ImageCard extends React.Component<Props, {}> {
  state = {};

  render() {
    return (
      <CardContainer>
        <Image src="https://item.kakaocdn.net/do/a4f929470c263313e72afbf74ae34d79f43ad912ad8dd55b04db6a64cddaf76d" />
        <CardText>
          Lorem ipsum dolor
        </CardText>
      </CardContainer>
    );
  }
}

export default ImageCard;

const CardContainer = styled.div`
  height: 600px;
  width: 400px;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  object-fit: cover;
  width: 400px;
  height: 400px;
`;

const CardText = styled.div`
  width: 400px;
  height: 200px;
`;
