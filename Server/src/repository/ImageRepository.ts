import {IMAGE, PRODUCT_D_IMG} from "../model/Image";
import { Op, QueryTypes } from "sequelize"
import { Transaction } from "sequelize/types";
import sequelize from "../model/db";

export class ImageRepository {
  constructor() {}
  async selectImages() {
    try {
        console.log('IMGAE REPOSITORY:: selectImages');
        const result = await IMAGE.findAll({
            where: {
              DELETE_YN: {[Op.or]: {
                [Op.is] : null,
                [Op.eq] : 'N'
              }}
          }
        });
      return result
    } catch (err) {
      console.log("Error during selectImages in Repository", err)
      throw err
    }
  } 

  async selectImagesByPage(page:number) {
    try {
        console.log('IMGAE REPOSITORY:: selectImagesByPage');
        const result = await IMAGE.findAll({ offset: (page-1) * 30, limit: 30, where: {
          DELETE_YN: {[Op.or]: {
            [Op.is] : null,
            [Op.eq] : 'N'
          }}}});
      return result
    } catch (err) {
      console.log("Error during selectImagesByPage in Repository", err)
      throw err
    }
  }

  async selectImage(id:number) {
    try {
        console.log('IMAGE REPOSITORY:: selectImage');
        const result = await IMAGE.findOne({
            where: {
              DELETE_YN: {[Op.or]: {
                [Op.is] : null,
                [Op.eq] : 'N'
              }},
              IMG_ID: id
          }
        });
      return result
    } catch (err) {
      console.log("Error during selectImage in Repository", err)
      throw err
    }
  }

  async insertImage(transaction:Transaction, image:any) {
    try {
        console.log('IMAGE REPOSITORY:: insertImage');
        const result = await IMAGE.create(
                {
                 IMG_URL: image.IMG_URL
                ,DELETE_YN: 'N'
                ,
                },
                {transaction: transaction}
                )
      return result
    } catch (err) {
      console.log("Error during insertImage in Repository", err)
      throw err
    }
  }
  
  async deleteImage(transaction:Transaction, id:number) {
    try {
      console.log('IMAGE REPOSITORY:: deleteImage');
      const result = await IMAGE.update(
        {
          DELETE_YN : 'Y'
        },
        {
          where: {IMG_ID: id},
          transaction: transaction
        }
        )
        return result
      } catch (err) {
        console.log("Error during deleteImage in Repository", err)
        throw err
      }
    }

    async selectProdImg(prodId:number) {
      try {
          console.log('IMAGE REPOSITORY:: insertImage');
          const result = await sequelize.query(
            `SELECT B.IMG_ID, B.IMG_URL
            FROM PRODUCT_D_IMG A, IMAGE B
           WHERE A.IMG_ID = B.IMG_ID
             AND A.PROD_ID = :prodId`,
            {
              replacements: { prodId: prodId },
              type: QueryTypes.SELECT
            });
        return result
      } catch (err) {
        console.log("Error during insertImage in Repository", err)
        throw err
      }
    }
    
    async insertProdImg(transaction:Transaction, prodId:number, imgId: number) {
      try {
          console.log('IMAGE REPOSITORY:: insertImage');
          const result = await PRODUCT_D_IMG.create(
                  {
                   PROD_ID: prodId,
                   IMG_ID: imgId,
                   DELETE_YN: 'N',
                  },
                  {transaction: transaction}
                  )
        return result
      } catch (err) {
        console.log("Error during insertImage in Repository", err)
        throw err
      }
    }
  }   