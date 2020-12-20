import React, { useState } from "react";
import styled from "styled-components";
interface ImageProps {
  imageUrl: string;
  imageText?: string;
  onClick?: (name: string) => void;
  href?: string;
}
function ImageCard({ ...props }: ImageProps) {
  return (
    <CardContainer>
      <Image
        src={
          props.imageUrl
            ? props.imageUrl
            : "https://item.kakaocdn.net/do/a4f929470c263313e72afbf74ae34d79f43ad912ad8dd55b04db6a64cddaf76d"
        }
      />
      <CardText>{props.imageText ? props.imageText : "No word"}</CardText>
    </CardContainer>
  );
}

export default ImageCard;

const CardContainer = styled.div`
  width: 25%;
  position: relative;
  display: inline-block;
  margin: 0 0 40px;
  overflow: hidden;
`;

const Image = styled.img`
  position: relative;
  margin: 10px 10px;
  text-align: center;
`;

const CardText = styled.div``;
