import React from "react";
import styled from "styled-components";
import product from "types/product";

interface ImageProps {
  data: Array<product>;
  onClick?: (name: string) => void;
  href?: string;
}
function BigImage({ ...props }: ImageProps) {
  // console.log(props.data);
  return (
    <CardContainer>
      {
        <Image
          src={
            props.data[0].TUMB_IMG
              ? props.data[0].TUMB_IMG
              : "http://youngmill.kr/web/product/big/202011/e7ca0e460a1c8c8129878775aa638f05.jpg"
          }
          alt="ugh"
        />
      }
      {props.data[0].TITLE}
      <CardText>Lorem ipsum dolor</CardText>
    </CardContainer>
  );
}

export default BigImage;

const CardContainer = styled.div`
  width: 33.33%;
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
const CardText = styled.div``;
