import sequelize from "../model/db";
import { MemberRepository } from '../repository'
import { MemberType, changingSecretBodyType, userInfoType } from '../entity'
import { createPassword } from '../middleware/Auth'


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
      await this.memberRepo.login(transaction, member)
      await this.memberRepo.isDeletedMember(transaction, member.user_id)
      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  }

  async deleteMember (id: string) {
    const transaction = await sequelize.transaction()
    try {
      await this.memberRepo.isDeletedMember(transaction, id)
      await this.memberRepo.deleteMember(transaction, id)
      await transaction.commit()
    } catch (err) {
      throw err
    }
  }


  async readMember (id:string) {
    const transaction = await sequelize.transaction()
    try {
      await this.memberRepo.isDeletedMember(transaction, id)
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
      await this.memberRepo.isDeletedMember(transaction, id)
      await this.memberRepo.updateMember(transaction, id, member)
      await transaction.commit()
    } catch (err) {
      throw err
    }
  }

  async updateMemberSecret (id: string, userInfo:userInfoType, pwds:changingSecretBodyType) {
    const transaction = await sequelize.transaction()
    try {
      const member = {user_id:userInfo.user_id, user_name:userInfo.user_name}
      await this.memberRepo.isDeletedMember(transaction, id)
      await this.memberRepo.login(transaction, {...member, pwd:pwds.old_pwd})
      const saltedPassword = await createPassword(pwds.new_pwd)
      await this.memberRepo.updateMember(transaction, id, { ...member, pwd:saltedPassword })
      await transaction.commit()
    } catch (err) {
      throw err
    }
  }
}