import * as React from 'react';
import Carousel from "components/common/carousel/Carousel";
export interface IProductInfoProps {
}

export interface IProductInfoState {
}

export default class ProductInfo extends React.Component<IProductInfoProps, IProductInfoState> {
  constructor(props: IProductInfoProps) {
    super(props);

    this.state = {
    }
  }

  public render() {
    return (
      <div>
        <Carousel></Carousel>
        <div>
            상품 상세정보 페이지
        </div>
      </div>
    );
  }
}
