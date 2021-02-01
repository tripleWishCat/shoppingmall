import { QNA } from "../model/Qna";
import { Transaction } from "sequelize/types";

export class QnaRepository {
  constructor() {}

  insertQna(transaction:Transaction, qna:any) {
    return QNA.create({...qna}, {transaction:transaction})
  }

  selectQna(transaction:Transaction, qnaId:number) {
    return QNA.findOne({ where: {QNA_ID: qnaId} , transaction: transaction})
  }

  selectQnas(transaction:Transaction, page:number) {
    return QNA.findAll({ offset: (page-1) * 30, limit: 30, transaction: transaction})  
  }

  updateQna(transaction:Transaction, qna:any) {
    return QNA.update({...qna}, {where: {QNA_ID: qna.QNA_ID}, transaction:transaction})
  }

  deleteQna(transaction:Transaction, qnaId:any) {
    return QNA.destroy({where: {QNA_ID: qnaId}, transaction:transaction})
  }
}
