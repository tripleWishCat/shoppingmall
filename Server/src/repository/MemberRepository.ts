import Member from "../model/Member";
import { Transaction } from "sequelize/types";
import { createPassword } from '../middleware/Auth'
import { MemberType } from '../entity'


export class MemberRepository {
  constructor() {}
  async createMember (transaction:Transaction, member:MemberType) {
    try {
      const saltedPassword = await createPassword(member.pwd)
      console.log('saltedPassword', saltedPassword)
      const newMember = { ...member, pwd:saltedPassword.hash, salt:saltedPassword.salt}
      console.log(newMember)
      await Member.create(newMember, {transaction: transaction})
      return newMember
    } catch (err) {
      console.log("Error during createMember in Repository", err)
      return err
    }
  } 
}