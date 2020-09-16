import Member from "../model/Member";
import { Transaction } from "sequelize/types";
import { createPassword } from '../middleware/Auth'
import { MemberType } from '../entity'


export class MemberRepository {
  constructor() {}
  async createMember (transaction:Transaction, member:MemberType) {
    try {
      const saltedPassword = await createPassword(member.pwd)
      const newMember = { ...member, pwd:saltedPassword.hash, salt:saltedPassword.salt}
      await Member.create(newMember, {transaction: transaction})
      return newMember
    } catch (err) {
      console.log("Error during createMember in Repository", err)
      return err
    }
  } 

  async login (member:MemberType) {
    try {
      const saltedPassword = await createPassword(member.pwd)
      const visitor = Object(await Member.findOne({where : {id: member.id}}))
      console.log(visitor, 'visitor')
      if ((visitor.pwd === saltedPassword.hasher) && (visitor.salt === saltedPassword.salt)) {
        return true
      } else {
        return false
      }
    } catch (err) {
      console.log("Error during login in Repository", err)
      return err
    }
  }

  async deleteMember (id:string) {
    try {
      await Member.update({deleteYn:"Y"}, {where: {id:id}})
      return
    } catch (err) {
      console.log("Error during deleteMember in Repository", err)
      return err
    }
  }
}