import Member from "../model/Member";
import { Transaction } from "sequelize/types";
import { createPassword } from '../middleware/Auth'

export class MemberRepository {
  constructor() {}
  async createMember (transaction:Transaction, member:{}) {
    const newPwd =  createPassword('1234')
    const newMember = member
    await Member.create(newMember)
    return newMember
  } 
}