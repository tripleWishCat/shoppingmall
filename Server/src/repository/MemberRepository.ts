import Member from "../model/Member";
import { Transaction } from "sequelize/types";
import { compareHash, createPassword } from '../middleware/Auth'
import { MemberType } from '../entity'

export class MemberRepository {
  constructor() {}
  async createMember (transaction:Transaction, member:MemberType) {
    try {
      const saltedPassword = await createPassword(member.pwd)
      const newMember = { ...member, pwd:saltedPassword.hash, salt:saltedPassword.salt, reg_date:new Date(), chg_date: new Date()}
      return Member.create(newMember, {transaction: transaction})
    } catch (err) {
      console.log("Error during createMember in Repository", err)
      throw err
    }
  } 
  
  // TODO : SALT 삭제하기
  async login (transaction: Transaction, member:MemberType) {
    try {
      const visitorInstance = await Member.findOne({where : {user_id: member.user_id}, transaction: transaction})
      const visitor = Object(visitorInstance)
      const saltedPassword = await createPassword(member.pwd, visitor.salt)
      const isValid = compareHash(visitor.pwd, saltedPassword.hash)
      if (!isValid) throw Error('User Information is not correct. Check again')
    } catch (err) {
      console.log("Error during login in Repository", err)
      throw err
    }
  }

  async readMember (transaction:Transaction, id: string) {
    try {
      const member = await Member.findOne({ where : {user_id: id} , transaction: transaction})
      const result = Object(member)
      return result
    } catch(err) {
      console.log("Error during readMember in Repository", err)
      throw err
    }
  }

  updateMember (transaction:Transaction, id: string, member:MemberType) {
    try {
      return Member.update({ ...member, chg_date:new Date() }, { where: { user_id: id }, transaction: transaction })
    } catch (err) {
      console.log("Error during updateMember in Repository")
      throw err
    }
  }

  async validateMember (transaction:Transaction, id:string) {
    try {
      const visitor = await this.readMember(transaction, id)
      if (visitor.delete_yn === 'Y') throw Error('This user was deleted. Check again your id.')
    } catch (err) {
      console.log("Error during validating in Repository")
      throw err
    }
  }


  deleteMember (transaction:Transaction, id:string) {
    try {
      return Member.update({delete_yn:"Y"}, {where: {user_id:id}, transaction:transaction})
    } catch (err) {
      console.log("Error during deleteMember in Repository", err)
      throw err
    }
  }
}