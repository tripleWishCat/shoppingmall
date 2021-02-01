import React from "react";
import styled from "styled-components";
import product from "types/product";
interface ImageProps {
  data: Array<product>;
  onClick?: (name: string) => void;
  href?: string;
}
function SmallImage({ ...props }: ImageProps) {
  console.log(props.data);
  return (
    <CardContainer>
      <Card>
        <Image
          src={
            props.data[0].TUMB_IMG
              ? props.data[0].TUMB_IMG
              : "http://youngmill.kr/web/product/big/202011/e7ca0e460a1c8c8129878775aa638f05.jpg"
          }
        />
        <p>{props.data[0].TITLE}</p>
        <p>{props.data[0].SUB_TITLE}</p>
        <p>{props.data[0].PRICE}원</p>
        <p></p>
      </Card>
    </CardContainer>
  );
}

export default SmallImage;

const CardContainer = styled.div`
  width: 25%;
  position: relative;
  display: inline-block;
  margin: 0 0 40px;
  overflow: hidden;
`;

const Image = styled.img``;
const Card = styled.div`
  position: relative;
  margin: 10px 10px;
  text-align: left;
`;
const CardText = styled.div``;
