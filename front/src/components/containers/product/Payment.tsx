import * as React from 'react';
import Carousel from "components/common/carousel/Carousel";
import Button from "@material-ui/core/Button";
import axios from 'axios';

declare global {
    interface Window { IMP: any; }
    interface Payment { IMP: any; }
}

window.IMP = window.IMP || {};

export interface IPaymentProps {
}

export interface IPaymentState {
}

export default class Payment extends React.Component<IPaymentProps, IPaymentState> {
  constructor(props: IPaymentProps) {
    super(props);
    this.state = {
    }
  }

  pay(event:any) {
    const { IMP } = window;
    IMP.init("imp00734179");


    axios.post('http://127.0.0.1:3000/api/order').then((res:any) => {
      if (res.status == 200) {
        IMP.request_pay({ // param
          pg: "html5_inicis",
          pay_method: "card",
          merchant_uid: res.data.MERCHANT_UID,
          name: "찬우와 함께하는 테스트",
          amount: 1000,
          buyer_email: "gildong@gmail.com",
          buyer_name: res.data.USER_ID,
          buyer_tel: "010-1234-4351",
          buyer_addr: "서울특별시 강남구 신사동",
          buyer_postcode: "01181"
        }, (rsp:any) => { // callback
          console.log(rsp);
          if (rsp.success) {
              axios.put('http://127.0.0.1:3000/api/order', {
                APPLY_NUM: rsp.apply_num,
                BANK_NAME: rsp.bank_name,
                BUYER_ADDR: rsp.buyer_addr,
                BUYER_EMAIL: rsp.buyer_email,
                BUYER_NAME: rsp.buyer_name,
                BUYER_POSTCODE: rsp.buyer_postcode,
                BUYER_TEL: rsp.buyer_tel,
                CARD_NAME: rsp.card_name,
                CARD_NUMBER: rsp.card_number,
                CARD_QUOTA: rsp.card_quota,
                CURRENCY: rsp.currency,
                CUSTOM_DATA: rsp.custom_data,
                USER_ID: rsp.imp_uid,
                MERCHANT_UID: rsp.merchant_uid,
                NAME: rsp.name,
                PAID_AMOUNT: rsp.paid_amount,
                PAID_AT: rsp.paid_at,
                PAY_METHOD: rsp.pay_method,
                PG_PROVIDER: rsp.pg_provider,
                RSG_PG_TID: rsp.pg_tid,
                PG_TYPE: rsp.pg_type,
                RECEIPT_URL: rsp.receipt_url,
                STATUS: rsp.status,
                ORDER_D: [
                  {
                    PROD_ID: 1,
                    AMOUNT: 3
                  }, {
                    PROD_ID: 2,
                    AMOUNT: 2
                  }
                ]
              }).then(res => {
                console.log(res);
              })
              alert("결재성공")
          } else {
              alert("결재실패햇쥬")
          }
        })
      }
    })
    IMP.request_pay({ // param
        pg: "html5_inicis",
        pay_method: "card",
        merchant_uid: "ORD20180131-0000011",
        name: "인절미 한박스",
        amount: 1000,
        buyer_email: "gildong@gmail.com",
        buyer_name: "김병철",
        buyer_tel: "010-1234-5678",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181"
      }, (rsp:any) => { // callback
        if (rsp.success) {
            alert("결재성공")
        } else {
            alert("결재실패햇쥬")
        }
      })
  }

  public render() {
    return (
      <div>
        <Carousel></Carousel>
        <div>
            <Button
                onClick={this.pay}
                variant="contained"
                size="large"
                color="secondary"
            >
                결제하기기기기기기긱결제!!!
            </Button>
        </div>
      </div>
    );
  }
}