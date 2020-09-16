import sequelize from "../model/db";
import { MemberRepository } from '../repository'
import { MemberType } from '../entity'


export class MemberService {
  memberRepo : MemberRepository

  constructor () {
    this.memberRepo = new MemberRepository()
    console.log('Member Service constructed')
  }
  
  async createMember (member: MemberType) {
    const transaction = await sequelize.transaction()

    try {
      const newMember = await this.memberRepo.createMember(transaction, member)
      await transaction.commit()
      return newMember
    } catch (err) {
      await transaction.rollback()
      return err
    }
  }

  async deleteMember (id: string) {
    try {
      await this.memberRepo.deleteMember(id)
      return
    } catch (err) {
      return err
    }
  }
}