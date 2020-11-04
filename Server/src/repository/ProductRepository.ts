import {Product_M, Product_D, PRODUCT_RLT, Product_D_IMG} from "../model/Product";
import { QueryTypes, Op } from "sequelize"
import sequelize from "../model/db";
import { Transaction } from "sequelize/types";


export class ProductRepository {
  constructor() {}
  async selectProducts() {
    try {
        console.log('PRODUCT REPOSITORY:: selectProducts');
        const result = await Product_M.findAll({
            where: {
              DELETE_YN: {[Op.or]: {
                [Op.is] : null,
                [Op.eq] : 'N'
              }}
          }
        });
      return result
    } catch (err) {
      console.log("Error during selectProducts in Repository", err)
      throw err
    }
  } 
  async selectProductsByPage(page:number) {
    try {
        console.log('PRODUCT REPOSITORY:: selectProductsByPage');
        const result = await Product_M.findAll({ offset: (page-1) * 30, limit: 30, where: {
          DELETE_YN: {[Op.or]: {
            [Op.is] : null,
            [Op.eq] : 'N'
          }}}});
      return result
    } catch (err) {
      console.log("Error during selectProductsByPage in Repository", err)
      throw err
    }
  }
  async selectProductsSearch(search:string, page:number) {
    try {
        console.log('PRODUCT REPOSITORY:: selectProductsSearch');
        const result = await Product_M.findAll({
          offset: (page-1) * 30, limit: 30,
          where: {
            DELETE_YN: {[Op.or]: {
              [Op.is] : null,
              [Op.eq] : 'N'
            }},
            TITLE: {[Op.like]: `%${search}%`}
        }
      });
      return result
    } catch (err) {
      console.log("Error during selectProduct in Repository", err)
      throw err
    }
  } 
  async selectProduct(id:number) {
    try {
        console.log('PRODUCT REPOSITORY:: selectProduct');
        const result = await sequelize.query(
            `SELECT * 
               FROM PRODUCT_M, PRODUCT_D 
              WHERE PRODUCT_M.PROD_ID = PRODUCT_D.PROD_ID 
                AND PRODUCT_M.PROD_ID = :id
                AND IFNULL(PRODUCT_M.DELETE_YN, 'N') = 'N'`,
            {
              replacements: { id: id },
              type: QueryTypes.SELECT
            });
      return result
    } catch (err) {
      console.log("Error during selectProduct in Repository", err)
      throw err
    }
  }
  async insertProductM(transaction:Transaction, product:any) {
    try {
        console.log('PRODUCT REPOSITORY:: insertProductM');
        const result = await Product_M.create(
                {
                 TITLE : product.TITLE
                ,SUB_TITLE : product.SUB_TITLE
                ,TUMB_IMG: product.TUMB_IMG
                ,PRICE: product.PRICE
                ,SALE_YN: product.SALE_YN
                ,S_PRICE: product.S_PRICE
                ,S_RATE: product.S_RATE
                ,NOTICE: product.NOTICE
                ,CATEGORY: product.CATEGORY
                ,
                },
                {transaction: transaction}
                )
      return result
    } catch (err) {
      console.log("Error during insertProductM in Repository", err)
      throw err
    }
  }
  async insertProductD(transaction:Transaction, productD:any) {
    try {
        console.log('PRODUCT REPOSITORY:: insertProductD');
        const result = await Product_D.create(
          {
           PROD_ID: productD.PROD_ID,
           P_POINT: productD.P_POINT
          ,DELI_LOC: productD.DELI_LOC
          ,DELI_WAY: productD.DELI_WAY
          ,DELI_FEE: productD.DELI_FEE
          ,DELI_FREE_AMT: productD.DELI_FREE_AMT
          ,STOCK: productD.STOCK
          ,
          },
          {transaction: transaction}
          )
          return result
    } catch (err) {
      console.log("Error during insertProductD in Repository", err)
      throw err
    }
  }

  async updateProductM(transaction:Transaction, product:any) {
    try {
        console.log('PRODUCT REPOSITORY:: updateProductM');
        console.log(product)
        const result = await Product_M.update(
          {
            TITLE: product.TITLE
            ,SUB_TITLE: product.SUB_TITLE
            ,TUMB_IMG: product.TUMB_IMG
            ,PRICE: product.PRICE
            ,SALE_YN: product.SALE_YN
            ,S_PRICE: product.S_PRICE
            ,S_RATE: product.S_RATE
            ,NOTICE: product.NOTICE
            ,CATEGORY: product.CATEGORY
            ,DELETE_YN: product.DELETE_YN
          },
          {
            where: {
              PROD_ID: product.PROD_ID,
              DELETE_YN: {[Op.or]: {
                [Op.is] : null,
                [Op.eq] : 'N'
              }}
            },
            transaction: transaction
          }
          )
          return result
    } catch (err) {
      console.log("Error during updateProductM in Repository", err)
      throw err
    }
  }
  async updateProductD(transaction:Transaction, productD:any) {
    try {
        console.log('PRODUCT REPOSITORY:: updateProductD');
        const result = await Product_D.update(
          {
            P_POINT: productD.P_POINT
           ,DELI_LOC: productD.DELI_LOC
           ,DELI_WAY: productD.DELI_WAY
           ,DELI_FEE: productD.DELI_FEE
           ,DELI_FREE_AMT: productD.DELI_FREE_AMT
           ,STOCK: productD.STOCK
          },
          {
            where: {PROD_ID: productD.PROD_ID},
            transaction: transaction
          }
          )
          return result
    } catch (err) {
      console.log("Error during updateProductD in Repository", err)
      throw err
    }
  }
  async deleteProductM(transaction:Transaction, id:number) {
    try {
        console.log('PRODUCT REPOSITORY:: deleteProductM');
        const result = await Product_M.update(
          {
           DELETE_YN : 'Y'
          },
          {
            where: {PROD_ID: id},
            transaction: transaction
          }
          )
          return result
    } catch (err) {
      console.log("Error during deleteProductM in Repository", err);
      throw err;
    }
  }
  async insertProductDIMG(transaction:Transaction, prodId:number, imgId:number) {
    try {
      console.log('PRODUCT REPOSITORY:: insertProductDIMG');
      // const result = await Product_D_IMG.create(

      // )
      return true;
    } catch (err) {
      console.log("Error during insertProductDIMG in Repository", err);
      throw err;
    }
  }
}