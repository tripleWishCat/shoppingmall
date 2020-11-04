import DeliLocation from "../model/DeliLocation";
import { Transaction } from "sequelize/types";
import { DeliLocationType } from '../entity'

export class DeliLocationRepository {
  constructor() {}

  createDeliLocation(transaction:Transaction, deliLocation:DeliLocationType) {
    return DeliLocation.create({...deliLocation, reg_date: new Date(), chg_date: new Date()}, {transaction:transaction})
  }

  readDeliLocations(transaction:Transaction, id: string) {
    return DeliLocation.findAll({ where : {user_id: id} , transaction: transaction})
  }

  updateDeliLocation(transaction:Transaction, user_id: string, id: number, deliLocation: DeliLocationType) {
    return DeliLocation.update({...deliLocation, chg_date: new Date()}, {where: {deli_loc_id: id, user_id: user_id}, transaction:transaction})
  }

  deleteDeliLocation(transaction:Transaction, user_id: string, id: number) {
    return DeliLocation.destroy({where: {deli_loc_id: id, user_id: user_id}, transaction:transaction})
  }
}