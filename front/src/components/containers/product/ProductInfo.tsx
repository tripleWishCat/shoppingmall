import * as React from 'react';

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
        <div>
            {/* 제품 이미지 */}
            {/* 제품 리뷰 */}
            {/* 제품 상세정보  */}
            상품 상세정보 페이지
        </div>
      </div>
    );
  }
}
