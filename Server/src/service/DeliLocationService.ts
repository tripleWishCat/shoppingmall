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

  // TODO : user_id와 요청보낸 user의 id가 같은지 검증하는 로직 추가
  async updateDeliLocation(user_id: string, id:number, deliLocation:DeliLocationType) {
    const transaction = await sequelize.transaction()
    try {
      await this.DeliLocationRepo.updateDeliLocation(transaction, user_id, id, deliLocation)
      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  }

  // TODO : user_id와 요청보낸 user의 id가 같은지 검증하는 로직 추가
  async deleteDeliLocation(user_id: string, id:number) {
    const transaction = await sequelize.transaction()
    try {
      await this.DeliLocationRepo.deleteDeliLocation(transaction, user_id, id)
      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  }
}