import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getOneData } from "api/ProductApi";
import product from "types/product";
interface Params {
  productId: string;
}
export default function ProductInfo() {
  const { productId } = useParams<Params>();
  const [item, setItem] = useState<product>();
  useEffect(() => {
    const getData = async function () {
      await getOneData(Number(productId)).then((res) => {
        setItem(res);
      });
    };
    getData();
  }, []);

  return (
    <div>
      <div>상품 상세정보 페이지</div>
      <div>{productId}</div>
      <div>{item?.PROD_ID}</div>
      <img src={item ? item.TUMB_IMG : "hello"} alt="" />
    </div>
  );
}
