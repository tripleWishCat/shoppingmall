import React, { useState } from "react";
import styled from "styled-components";
import product from "types/product";
interface ImageProps {
  data: Array<product>;
  onClick?: (name: string) => void;
  href?: string;
}
function ImageCard({ ...props }: ImageProps) {
  console.log(props.data);
  return (
    <CardContainer>
      <Image
        src={
          props.data[0].TUMB_IMG
            ? props.data[0].TUMB_IMG
            : "https://item.kakaocdn.net/do/a4f929470c263313e72afbf74ae34d79f43ad912ad8dd55b04db6a64cddaf76d"
        }
      />
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
