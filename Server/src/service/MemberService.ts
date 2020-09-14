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
      console.log('I got this member', member)
      const newMember = await this.memberRepo.createMember(transaction, member)
      console.log('suceesfully created')
      await transaction.commit()
      return newMember
    } catch (err) {
      await transaction.rollback()
      return err
    }
  }
}