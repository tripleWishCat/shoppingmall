import { Order_M, Order_D } from "../model/Order";
import { QueryTypes, Op } from "sequelize"
import sequelize from "../model/db";
import { Transaction } from "sequelize/types";


export class OrderRepository {
  constructor() {}
  async selectOrders() {
    try {
        console.log('ORDER REPOSITORY:: selectOrders');
        const result = await Order_M.findAll();
      return result
    } catch (err) {
      console.log("Error during selectOrders in Repository", err)
      throw err
    }
  } 
  async selectOrdersByPage(page:number) {
    try {
        console.log('ORDER REPOSITORY:: selectOrdersByPage');
        const result = await Order_M.findAll({ offset: (page-1) * 30, limit: 30});
      return result
    } catch (err) {
      console.log("Error during selectOrdersByPage in Repository", err)
      throw err
    }
  }
  async selectOrdersByUserId(userId:string, page:number) {
    try {
        console.log('ORDER REPOSITORY:: selectOrdersByUserId');
        const result = await Order_M.findAll({
          offset: (page-1) * 30, limit: 30,
          where: {
            user_id: {[Op.like]: `%${userId}%`},
        }
      });
      return result
    } catch (err) {
      console.log("Error during selectOrdersByUserId in Repository", err)
      throw err
    }
  } 
  async selectOrder(id:number) {
    try {
        console.log('ORDER REPOSITORY:: selectOrder');
        const result = await sequelize.query(
            `SELECT * 
               FROM ORDER_M, ORDER_D, PRODUCT_M 
              WHERE ORDER_M.MERCHANT_UID = ORDER_M.MERCHANT_UID
                AND ORDER_D.PROD_ID = PRODUCT_M.PROD_ID
                AND ORDER_M.MERCHANT_UID = :id`,
            {
              replacements: { id: id },
              type: QueryTypes.SELECT
            });
      return result
    } catch (err) {
      console.log("Error during selectOrder in Repository", err)
      throw err
    }
  }
  async insertOrderM(transaction:Transaction, order:any) {
    try {
        console.log('ORDER REPOSITORY:: insertOrderM');
        const result = await Order_M.create(
               {
                MERCHANT_UID: order.MERCHANT_UID,
                USER_ID: order.USER_ID,
                PAY_YN: `N`,
                ERROR: '00',
                REG_ID: order.USER_ID,
                CHG_ID: order.USER_ID,
               },
                {transaction: transaction}
                )
      return result
    } catch (err) {
      console.log("Error during insertOrderM in Repository", err)
      throw err
    }
  }
  async insertOrderD(transaction:Transaction, orderD:any) {
    try {
        console.log('ORDER REPOSITORY:: insertOrderD');
        const result = await Order_D.create(
          {
           MERCHANT_UID: orderD.MERCHANT_UID,
           PROD_ID: orderD.PROD_ID,
           AMOUNT: orderD.AMOUNT,
          },
          {transaction: transaction}
          )
          return result
    } catch (err) {
      console.log("Error during insertOrderD in Repository", err)
      throw err
    }
  }

  async updateOrdertM(transaction:Transaction, order:any) {
    try {
        console.log('ORDER REPOSITORY:: updateOrdertM');
        const result = await Order_M.update(
          {
            PG: order.PG,
              PAY_METHOD: order.PAY_METHOD,
              ESCROW: order.ESCROW,
              NAME: order.NAME,
              AMOUNT: order.AMOUNT,
              CUSTOM_DATA: order.CUSTOM_DATA,
              TAX_FREE: order.TAX_FREE,
              VAT: order.VAT,
              CURRENCY: order.CURRENCY,
              BUYER_NAME: order.BUYER_NAME,
              BUYER_TEL: order.BUYER_TEL,
              BUYER_EMAIL: order.BUYER_EMAIL,
              BUYER_ADDR: order.BUYER_ADDR,
              BUYER_POSTCODE: order.BUYER_POSTCODE,
              PAY_YN: order.PAY_YN,
              ERROR: order.ERROR,
          },
          {
            where: {
              MERCHANT_UID: order.MERCHANT_UID,
            },
            transaction: transaction
            },
          )
          return result
    } catch (err) {
      console.log("Error during updateOrdertM in Repository", err)
      throw err
    }
  }
  async updateOrderD(transaction:Transaction, orderD:any) {
    try {
        console.log('ORDER REPOSITORY:: updateOrderD');
        const result = await Order_D.update(
          {
            AMOUNT: orderD.AMOUNT,
          },
          {
            where: {
                MERCHANT_UID: orderD.MERCHANT_UID,
                PROD_ID: orderD.PROD_ID,},
            transaction: transaction
          }
          )
          return result
    } catch (err) {
      console.log("Error during updateProductD in Repository", err)
      throw err
    }
  }
//   async deleteOrderM(transaction:Transaction, id:number) {
//     try {
//         console.log('ORDER REPOSITORY:: deleteOrderM');
//         const result = await Order_M.update(
//           {
//            DELETE_YN : 'Y'
//           },
//           {
//             where: {
//                 MERCHANT_UID: orderD.MERCHANT_UID,
//             },
//             transaction: transaction
//           }
//           )
//           return result
//     } catch (err) {
//       console.log("Error during deleteOrderM in Repository", err);
//       throw err;
//     }
//   }
}