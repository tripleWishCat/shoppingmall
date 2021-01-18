import React, { useState } from "react";
import { useParams } from "react-router";
import { getOneData } from "api/ProductApi";

// interface MatchParams {
//   productId: string;
// }
// export default class ProductInfo extends React.Component<
//   RouteComponentProps<MatchParams>
// > {
//   componentDidMount() {
//     console.log(this.props.match);
//   }
//   public render() {
//     return (
//       <>
//         <div>Hello</div>
//         {this.props.match.params.productId}
//       </>
//     );
//   }
// }
interface Params {
  productId: string;
}
export default function ProductInfo() {
  const { productId } = useParams<Params>();
  return (
    <div>
      <div>상품 상세정보 페이지</div>
      <div>{productId}</div>
    </div>
  );
}
