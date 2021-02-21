import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getOneData } from "api/ProductApi";
import product from "types/product";
import ProductImage from "components/cards/ProductImage";
import styled from "styled-components";
import InfoNav from "components/navbar/InfoNav";
import ProductCarousel from "components/carousel/ProductCarousel";
import { useHistory } from "react-router-dom";
interface Params {
  productId: string;
}
export default function ProductInfo() {
  const history = useHistory();
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

  return (
    <>
      <Title>{item?.[0].TITLE}</Title>
      <Wrapper>
        {/* <ProductCarousel></ProductCarousel> */}
        {item?.map((data) => (
          <div key={data.PROD_ID}>
            <ProductImage data={[data]} />
          </div>
        ))}
        <InfoContainer>
          <h2>{item?.[0].TITLE}</h2>
          <h4>{item?.[0].SUB_TITLE}</h4>
          <div className="detail-text-wrapper">
            <div className="title">할인판매가</div>
            <div className="value">
              <h3>{item?.[0].PRICE}원</h3>
            </div>
          </div>
          <div className="detail-text-wrapper">
            <div className="title">적립금</div>
            <div className="value">{Number(item?.[0].PRICE) / 50}원</div>
          </div>
          <div className="detail-text-wrapper">
            <div className="title">국내.해외배송</div>
            <div className="value">국내배송</div>
          </div>
          <div className="detail-text-wrapper">
            <div className="title">배송방법</div>
            <div className="value">택배(롯데택배 / 아이스박스)</div>
          </div>
          <div className="detail-text-wrapper">
            <div className="title">배송비</div>
            <div className="value">무료</div>
          </div>

          <CalWrapper>
            <CalTable>
              <div>{item?.[0].TITLE}</div>
              <div>갯수 컴포넌트</div>
              <div>{item?.[0].PRICE}</div>
            </CalTable>
          </CalWrapper>
        </InfoContainer>
      </Wrapper>
      <InfoNav />
      <section id="detail-review">
        <SectionWrapper>detail-review</SectionWrapper>
      </section>
      <InfoNav />
      <section id="detail-info">
        <SectionWrapper>detail-info</SectionWrapper>
      </section>
      <InfoNav />
      <section id="detail-product">
        <SectionWrapper>detail-product</SectionWrapper>
      </section>

      <InfoNav />
      <section id="detail-related">
        <SectionWrapper>detail-related</SectionWrapper>
      </section>
      <InfoNav />
      <section id="detail-Qna">
        <SectionWrapper>detail-Qna</SectionWrapper>
      </section>
    </>
  );
}
const Title = styled.div`
  padding: 20px 0 10px;
  border-bottom: 1px solid lightgrey;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0 20px 0;
`;

const InfoContainer = styled.div`
  margin-left: 6%;
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const SectionWrapper = styled.div`
  width: 100%;
  height: 30vh;
`;

const CalWrapper = styled.div`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 1rem 0;
`;
const CalTable = styled.div`
  display: flex;
  justify-content: space-between;
`;
