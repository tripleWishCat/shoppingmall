import {SHOPPINGBAG} from "../model/ShoppingBag";
import { Transaction } from "sequelize/types";
import { Op, QueryTypes } from "sequelize";
import sequelize from "../model/db";

export class ShoppingBagRepository {
  constructor() {}
  async selectShoppingBags() {
    try {
        console.log('SHOPPINGBAG REPOSITORY:: selectShoppingBags');
        const result = await SHOPPINGBAG.findAll();
      return result;
    } catch (err) {
      console.log("Error during selectShoppingBags in Repository", err);
      throw err;
    }
  } 

  async selectShoppingBag(userId: string) {
    try {
        console.log('SHOPPINGBAG REPOSITORY:: selectShoppingBag');
        const result = await sequelize.query(
            `select A.PROD_ID
            , A.AMOUNT
            , B.TITLE 
            , B.SUB_TITLE 
            , B.TUMB_IMG 
            , B.PRICE 
            , B.SALE_YN 
            , B.S_PRICE 
            , B.S_RATE 
            , B.NOTICE 
            , B.CATEGORY 
            , B.RATE 
            , B.DELETE_YN 
            , C.P_POINT 
            , C.DELI_LOC 
            , C.DELI_WAY 
            , C.DELI_FEE 
            , C.DELI_FREE_AMT 
            , C.STOCK 
        from SHOPPING_BAG A,PRODUCT_M B, PRODUCT_D C
       WHERE A.USER_ID = :userId
         AND A.PROD_ID = B.PROD_ID 
         AND A.PROD_ID = C.PROD_ID`,
            {
              replacements: { userId: userId },
              type: QueryTypes.SELECT
            });
      return result;
    } catch (err) {
      console.log("Error during selectShoppingBag in Repository", err);
      throw err;
    }
  }

  async ifShoppingBagExists(userId: string, prodId: number) {
    try {
        console.log('SHOPPINGBAG REPOSITORY:: selectShoppingBag');
        const result = await SHOPPINGBAG.findAll({ where: {
          USER_ID: userId,
          PROD_ID: prodId,
        }});
      return result;
    } catch (err) {
      console.log("Error during selectShoppingBag in Repository", err);
      throw err;
    }
  }

  async insertShoppingBag(transaction: Transaction, userId: string, prodId: number, amount: number) {
    try {
        console.log('SHOPPINGBAG REPOSITORY:: insertShoppingBag');
        const result = await SHOPPINGBAG.create(
                {
                 USER_ID: userId,
                 PROD_ID: prodId,
                 AMOUNT: amount,
                },
                {transaction: transaction}
                )
      return result
    } catch (err) {
      console.log("Error during insertShoppingBag in Repository", err)
      throw err;
    }
  }
  
  async updateShoppingBag(transaction:Transaction, userId:string, prodId:number, amount:number) {
    try {
      console.log('SHOPPINGBAG REPOSITORY:: updateShoppingBag');
      const result = await SHOPPINGBAG.update(
        {
          AMOUNT : amount
        },
        {
          where: {
              USER_ID: userId,
              PROD_ID: prodId,
            },
          transaction: transaction
        }
        )
        return result;
      } catch (err) {
        console.log("Error during updateShoppingBag in Repository", err);
        throw err;
      }
    }
  }   