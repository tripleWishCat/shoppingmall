import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getOneData } from "api/ProductApi";
import product from "types/product";
import BigImage from "components/cards/BigImage";
interface Params {
  productId: string;
}
export default function ProductInfo() {
  const [item, setItem] = useState<[product]>();
  const { productId } = useParams<Params>();
  useEffect(() => {
    const getData = async function () {
      await getOneData(Number(productId)).then((res) => {
        setItem(res.data);
      });
    };
    getData();
  }, []);
  // console.log(item);
  return (
    <div>
      <div>상품 상세정보 페이지</div>
      {item?.map((data) => (
        <div key={data.PROD_ID}>
          <BigImage data={[data]} />
        </div>
      ))}
      {/* <div>{productId}</div> */}
      {/* <div>{item ? item.PROD_ID : "what"}</div>
      <img src={item ? item.TUMB_IMG : "hello"} alt="what" /> */}
    </div>
  );
}
