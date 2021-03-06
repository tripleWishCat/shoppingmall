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
  const [count, setCount] = useState(1);
  const [item, setItem] = useState<[product]>();
  const { productId } = useParams<Params>();
  const price: number = Number(item?.[0].PRICE);
  const handleCount = (move: number) => {
    if (move) {
      setCount(count + 1);
    } else {
      if (count > 2) {
        setCount(count - 1);
      } else {
        setCount(1);
      }
    }
  };

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
              <div>
                <button onClick={() => handleCount(0)}>-</button>
                {count}
                <button onClick={() => handleCount(1)}>+</button>
              </div>
              <div>{price * count}</div>
            </CalTable>
            <div>
              총 상품금액(수량) : {price * count}원({count}개)
            </div>
          </CalWrapper>
          <button>관심상품</button>
          <button>장바구니</button>
          <button>구매하기</button>
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
        <SectionWrapper>
          <h1>상품결제정보</h1> 고액결제의 경우 안전을 위해 카드사에서
          확인전화를 드릴 수도 있습니다. 확인과정에서 도난 카드의 사용이나 타인
          명의의 주문등 정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류
          또는 취소할 수 있습니다. 무통장 입금은 상품 구매 대금은 PC뱅킹,
          인터넷뱅킹, 텔레뱅킹 혹은 가까운 은행에서 직접 입금하시면 됩니다.
          주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며,
          7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은 자동취소 됩니다.
          <h1>배송정보</h1> 배송 방법 : 택배 배송 지역 : 전국지역(도서산간 및
          제주도 제외) 배송 비용 : 3,500원 배송 기간 : 1일 ~ 3일 배송 안내 : -
          산간벽지나 도서지방은 냉동상품 특성상 배송이 불가합니다. - 고객님께서
          주문하신 상품은 입금 확인후 배송해 드립니다. 다만, 상품종류에 따라서
          상품의 배송이 다소 지연될 수 있습니다. <h1>교환 및 반품정보</h1> 교환
          및 반품 주소 -경기도 화성시 동탄물류로 48 CJ대한통운 교환 및 반품이
          가능한 경우 - 제품의 하자가 있을 시, 상품을 공급 받으신 날로부터
          7일이내 단,식품의 경우, 상품 출고 이후 상품의 변질 및 유통기한 단축
          등으로 인해 재판매가 어려운 경우는 교환/반품이 불가할 수 있습니다.
          가전제품의 경우 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된
          경우에는 교환/반품이 불가능합니다. - 공급받으신 상품 및 용역의 내용이
          표시.광고 내용과 다르거나 다르게 이행된 경우에는 공급받은 날로부터
          3월이내, 그사실을 알게 된 날로부터 30일이내 교환 및 반품이 불가능한
          경우 - 냉동 식품 특성상 배송이 시작되면 취소/반품이 불가합니다. (단,
          상품 불량인 경우 제외) - 고객님의 책임 있는 사유로 상품등이 멸실 또는
          훼손된 경우. 단, 상품의 내용을 확인하기 위하여 포장 등을 훼손한 경우는
          제외 - 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우 (예
          : 가전제품, 식품, 음반 등, 단 액정화면이 부착된 노트북, LCD모니터,
          디지털 카메라 등의 불량화소에 따른 반품/교환은 제조사 기준에
          따릅니다.) - 고객님의 사용 또는 일부 소비에 의하여 상품의 가치가
          현저히 감소한 경우 단, 화장품등의 경우 시용제품을 제공한 경우에 한
          합니다. - 시간의 경과에 의하여 재판매가 곤란할 정도로 상품등의 가치가
          현저히 감소한 경우 - 복제가 가능한 상품등의 포장을 훼손한 경우 (자세한
          내용은 고객만족센터 1:1 게시판 상담을 이용해 주시기 바랍니다.) ※
          고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품반송 비용은
          고객님께서 부담하셔야 합니다. (색상 교환, 사이즈 교환 등 포함) 단,
          냉동 식품 특성상 배송이 시작되면 단순변심으로 인한 취소/반품이
          불가합니다
        </SectionWrapper>
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
  /* height: 30vh; */
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
