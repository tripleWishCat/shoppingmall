import React from "react";
import styled from "styled-components";
import product from "types/product";
interface ImageProps {
  data: Array<product>;
  onClick?: (name: string) => void;
  href?: string;
}
function ProductImage({ ...props }: ImageProps) {
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
      </Card>
    </CardContainer>
  );
}

export default ProductImage;

const CardContainer = styled.div`
  width: 100%;
  position: relative;
  display: inline-block;
  /* margin: 0 0 40px; */
  overflow: hidden;
`;

const Image = styled.img``;
const Card = styled.div`
  position: relative;
  text-align: left;
`;
