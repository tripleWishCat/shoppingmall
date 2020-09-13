import sequelize from "../model/db";
import { MemberRepository } from '../repository'

interface member {
  password: string
}


export class MemberService {
  constructor (MemberRepository: MemberRepository) {
    console.log('Member Service constructed')
  }
  async createMember (member: {}) {
    const transaction = await sequelize.transaction()
    try {
      const newMember = await this.MemberRepository.createMember(transaction, member)
      await transaction.commit()
      return newMember
    } catch (err) {
      await transaction.rollback()
      return err
    }
  }
}