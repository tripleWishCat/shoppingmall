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
      await this.memberRepo.createMember(transaction, member)
      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  }

  async login (member: MemberType) {
    const transaction = await sequelize.transaction()
    try {
      await this.memberRepo.validateMember(transaction, member.user_id)
      await this.memberRepo.login(transaction, member)
      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  }

  async deleteMember (id: string) {
    const transaction = await sequelize.transaction()
    try {
      await this.memberRepo.validateMember(transaction, id)
      await this.memberRepo.deleteMember(transaction, id)
      await transaction.commit()
    } catch (err) {
      throw err
    }
  }

  // TODO : read 전에 삭제된 유저인지 확인하는 로직 추가?
  async readMember (id:string) {
    const transaction = await sequelize.transaction()
    try {
      const member = await this.memberRepo.readMember(transaction, id)
      await transaction.commit()
      return member
    } catch (err) {
      throw err
    }
  }

  async updateMember (id:string, member:MemberType) {
    const transaction = await sequelize.transaction()
    try {
      await this.memberRepo.updateMember(transaction, id, member)
      await transaction.commit()
    } catch (err) {
      throw err
    }
  }
}