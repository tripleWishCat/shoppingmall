import { QNA } from "../model/Qna";
import { Transaction } from "sequelize/types";

export class DeliLocationRepository {
  constructor() {}

  insertQna(transaction:Transaction, qna:any) {
    return QNA.create({...qna}, {transaction:transaction})
  }

  selectQna(transaction:Transaction, qna:any) {
    return QNA.findOne({ where: {QNA_ID: qna.QNA_ID} , transaction: transaction})
  }

  selectQnas(transaction:Transaction, page: number) {
    return QNA.findAll({ offset: (page-1) * 30, limit: 30})  
  }

  updateQna(transaction:Transaction, qna:any) {
    return QNA.update({...qna}, {where: {QNA_ID: qna.QNA_ID}, transaction:transaction})
  }

  deleteQna(transaction:Transaction, qna:any) {
    return QNA.destroy({where: {QNA_ID: qna.QNA_ID}, transaction:transaction})
  }
}