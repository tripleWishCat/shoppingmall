import * as React from "react";

export interface IShopInfoProps {}

export interface IShopInfoState {}

export default class ShopInfo extends React.Component<
  IShopInfoProps,
  IShopInfoState
> {
  constructor(props: IShopInfoProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <div>
        이용안내
        <div>회원가입안내</div>
        <div>주문</div>
        <div>결제</div>
        <div>배송</div>
        <div>교환/반품</div>
        <div>환불</div>
        <div>기타안내</div>
      </div>
    );
  }
}
