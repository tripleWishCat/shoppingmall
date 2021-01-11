import sequelize from "../model/db";
import { ProductRepository, ImageRepository } from '../repository'
import { Transaction } from "sequelize/types";
import { response } from "express";


export class ProductService {
    productRepository: ProductRepository;
    imageRepository: ImageRepository;
  constructor () {
    this.productRepository = new ProductRepository();
    this.imageRepository = new ImageRepository();
    console.log('Product Service constructed')
  }
  
  async selectProducts() {
    try {
      console.log('PRODUCT SERVICE:: selectProducts');
      const result = await this.productRepository.selectProducts();
      return result;
    } 
    catch (err) {
      return err;
      throw err;
    }
  }
  async selectProductsByPage(page:number) {
    try {
      console.log('PRODUCT SERVICE:: selectProductsByPage');
      const result = await this.productRepository.selectProductsByPage(page);
      return result;
    } 
    catch (err) {
      return err;
      throw err;
    }
  }
  async selectProduct(id:number) {
    try {
      console.log('PRODUCT SERVICE:: selectProduct');
      const result:any = await this.productRepository.selectProduct(id);
      const image = await this.imageRepository.selectProdImg(id);
      result[0].IMGAE = image
      return result;
    } 
    catch (err) {
      return err;
    }
  }
  // selectProductsSearch
  async selectProductsSearch(search:string, page:number) {
    try {
      console.log('PRODUCT SERVICE:: selectProductsSearch');
      const result = await this.productRepository.selectProductsSearch(search, page);
      return result;
    } 
    catch (err) {
      return err;
    }
  }
  async insertProduct(product:any) {
    const transaction = await sequelize.transaction()
    try {
      console.log('PRODUCT SERVICE:: insertProduct');
      const productM_result = await this.productRepository.insertProductM(transaction, product);
      const prodId = productM_result.getDataValue('PROD_ID');
      product.PRODUCT_D.PROD_ID = prodId;
      await this.productRepository.insertProductD(transaction, product.PRODUCT_D);
      for (let i=0; i < product.IMAGE.length; i++) {
        const tempImgId = await this.imageRepository.insertImage(transaction, product.IMAGE[i]);
        await this.imageRepository.insertProdImg(transaction, prodId, tempImgId.getDataValue('IMG_ID'));
      }
      transaction.commit();
      return {PROD_ID: prodId};
    } 
    catch (err) {
      transaction.rollback();
      throw err;
    }
  }

  async updateProduct(product:any, id:number) {
    const transaction = await sequelize.transaction()
    try {
      console.log('PRODUCT SERVICE:: updateProduct');
      product.PROD_ID = id;
      console.log(product);
      const productM_result = await this.productRepository.updateProductM(transaction, product);
      console.log('PROD_ID:----------------------------------:' + productM_result);
      product.PRODUCT_D.PROD_ID = productM_result;
      const productD_result = await this.productRepository.updateProductD(transaction, product.PRODUCT_D);

      transaction.commit();
      return {
        productM_result: productM_result,
        productD_result: productD_result
      };
    } 
    catch (err) {
      console.log(err);
      transaction.rollback();
      return err;
    }
  }
  
  async deleteProduct(id:number) {
    const transaction = await sequelize.transaction()
    try {
      console.log('PRODUCT SERVICE:: deleteProduct');
      const productM_result = await this.productRepository.deleteProductM(transaction, id);
      transaction.commit();
      return {
        productM_result: productM_result
      };
    } 
    catch (err) {
      transaction.rollback();
      return err;
    }
  }
}