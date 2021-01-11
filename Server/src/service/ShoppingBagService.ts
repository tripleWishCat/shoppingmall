import sequelize from "../model/db";
import { ShoppingBagRepository } from '../repository'


export class ShoppingBagService {
  shoppingBagRepo : ShoppingBagRepository
  constructor () {this.shoppingBagRepo = new ShoppingBagRepository()}

  async insertShoppingBag(shoppingBags: any) {
    const transaction = await sequelize.transaction()
    try {
        const result = [];
        for (let i=0;i<shoppingBags.length;i++) {
            const nowShoppinngBag = shoppingBags[i];
            const selected = await this.shoppingBagRepo.ifShoppingBagExists(nowShoppinngBag.USER_ID, nowShoppinngBag.PROD_ID);
            if (selected.length > 0) {
                await this.shoppingBagRepo.updateShoppingBag(transaction, nowShoppinngBag.USER_ID, nowShoppinngBag.PROD_ID, nowShoppinngBag.AMOUNT);
                result.push({USER_ID: nowShoppinngBag.USER_ID, PROD_ID: nowShoppinngBag.PROD_ID, AMOUNT: nowShoppinngBag.AMOUNT});
            }
            await this.shoppingBagRepo.insertShoppingBag(transaction, nowShoppinngBag.USER_ID, nowShoppinngBag.PROD_ID, nowShoppinngBag.AMOUNT);
            result.push({USER_ID: nowShoppinngBag.USER_ID, PROD_ID: nowShoppinngBag.PROD_ID, AMOUNT: nowShoppinngBag.AMOUNT});
        }
      await transaction.commit();
      return result;
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  }

  async selectShoppingBag(userId: string) {
      try {
        const result = await this.shoppingBagRepo.selectShoppingBag(userId);
        return result;
      } catch (err) {
        throw err;  
      }
  }  
}
