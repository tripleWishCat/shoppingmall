import Axios from "axios";
import React, { Component } from "react";
import styled from "styled-components";

interface ImageProps {
  product_id: number;
}

interface ImageState {
  imageText: string;
  imageUrl: string;
}

class ImageCard extends Component<ImageProps, ImageState> {
  constructor(props: ImageProps) {
    super(props);
    this.state = {
      imageText: "default text",
      imageUrl:
        "https://item.kakaocdn.net/do/a4f929470c263313e72afbf74ae34d79f43ad912ad8dd55b04db6a64cddaf76d",
    };
  }

  componentDidMount() {
    const getProductData = (async function (product_id: number) {
      const baseurl: any = process.env.REACT_APP_REST + "/api/product/1";
      const data = await Axios.get(baseurl);
      console.log(data);
    })(this.props.product_id);
  }
  render() {
    return (
      <CardContainer>
        <Image src={this.state.imageUrl} />
        <CardText>{this.state.imageText}</CardText>
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
