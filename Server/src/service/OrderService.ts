import sequelize from "../model/db";
import { OrderRepository } from '../repository'
import { MemberType } from '../entity'
import { Transaction } from "sequelize/types";
import { response } from "express";


export class OrderService {
    orderRepository: OrderRepository;
  constructor () {
    this.orderRepository = new OrderRepository();
    console.log('Order Service constructed')
  }
  
  async selectOrders() {
    try {
      console.log('ORDER SERVICE:: selectOrders');
      const result = await this.orderRepository.selectOrders();
      return result;
    } 
    catch(err) {
      throw err;
    }
  }
  async selectOrdersByPage(page:number) {
    try {
      console.log('ORDER SERVICE:: selectOrdersByPage');
      const result = await this.orderRepository.selectOrdersByPage(page);
      return result;
    } 
    catch(err) {
      throw err;
    }
  }
  async selectOrder(id:number) {
    try {
      console.log('PRODUCT SERVICE:: selectProduct');
      const result = await this.orderRepository.selectOrder(id);
      return result;
    } 
    catch(err) {
      throw err;
    }
  }
  
  async selectOrdersByUserId(userId:string, page:number) {
    try {
      console.log('PRODUCT SERVICE:: selectOrdersByUserId');
      const result = await this.orderRepository.selectOrdersByUserId(userId, page);
      return result;
    } 
    catch(err) {
      throw err;
    }
  }
  async getOrderNumber() {
    const transaction = await sequelize.transaction();
    try {
      console.log('ORDER SERVICE:: getOrderNumber');
      // TODO(userId 받아올수 있도록 개발)
      let order = {
          MERCHANT_UID: new Date().getTime() + 'test',
          USER_ID: 'test',
      }
      const result = await this.orderRepository.insertOrderM(transaction, order);
      transaction.commit();
      return result;
    } 
    catch(err) {
      transaction.rollback();
      throw err;
    }
  }
  
  async updateOrder(order: any) {
    const transaction = await sequelize.transaction();
    try {
      let Order_M = await this.orderRepository.updateOrdertM(transaction, order);
      let Order_D = new Array();
      for (let i=0; i < order.ORDER_D.length; i++) {
        order.ORDER_D[i].MERCHANT_UID = order.MERCHANT_UID;
        let temp = await this.orderRepository.insertOrderD(transaction, order.ORDER_D[i]);
        Order_D.push(temp);
      }
      transaction.commit();
      return {Order_M, Order_D}
    } catch(err) {
      transaction.rollback();
      throw err
    }
  }
  // async updateProduct(product:any, id:number) {
  //   const transaction = await sequelize.transaction()
  //   try {
  //     console.log('PRODUCT SERVICE:: updateProduct');
  //     product.PROD_ID = id;
  //     console.log(product);
  //     const productM_result = await this.productRepository.updateProductM(transaction, product);
  //     console.log('PROD_ID:----------------------------------:' + productM_result);
  //     product.PRODUCT_D.PROD_ID = productM_result;
  //     const productD_result = await this.productRepository.updateProductD(transaction, product.PRODUCT_D);

  //     transaction.commit();
  //     return {
  //       productM_result: productM_result,
  //       productD_result: productD_result
  //     };
  //   } 
  //   catch (err) {
  //     console.log(err);
  //     transaction.rollback();
  //     return err;
  //   }
  // }
  
  // async deleteProduct(id:number) {
  //   const transaction = await sequelize.transaction()
  //   try {
  //     console.log('PRODUCT SERVICE:: deleteProduct');
  //     const productM_result = await this.productRepository.deleteProductM(transaction, id);
  //     transaction.commit();
  //     return {
  //       productM_result: productM_result
  //     };
  //   } 
  //   catch (err) {
  //     transaction.rollback();
  //     return err;
  //   }
  // }
}