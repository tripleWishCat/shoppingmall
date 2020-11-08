import sequelize from "../model/db";
import { DeliLocationRepository } from '../repository'
import { DeliLocationType } from '../entity'


export class DeliLocationService {
  DeliLocationRepo : DeliLocationRepository

  constructor () {
    this.DeliLocationRepo = new DeliLocationRepository()
    console.log('Member Service constructed')
  }

  async createDeliLocation (deliLocation: DeliLocationType) {
    const transaction = await sequelize.transaction()
    try {
      await this.DeliLocationRepo.createDeliLocation(transaction, deliLocation)
      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  }
  
  async readDeliLocations (id: string) {
    const transaction = await sequelize.transaction()
    try {
      const result = await this.DeliLocationRepo.readDeliLocations(transaction, id)
      await transaction.commit()
      return result
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  }

  async updateDeliLocation(deli_loc_id:number, deliLocation:DeliLocationType) {
    const transaction = await sequelize.transaction()
    try {
      await this.DeliLocationRepo.updateDeliLocation(transaction, deli_loc_id, deliLocation)
      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  }

  async deleteDeliLocation(deli_loc_id:number) {
    const transaction = await sequelize.transaction()
    try {
      await this.DeliLocationRepo.deleteDeliLocation(transaction, deli_loc_id)
      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  }
}