import { QNA } from "../model/Qna";
import { Transaction } from "sequelize/types";

<<<<<<< Updated upstream
export class DeliLocationRepository {
=======
export class QnaRepository {
>>>>>>> Stashed changes
  constructor() {}

  insertQna(transaction:Transaction, qna:any) {
    return QNA.create({...qna}, {transaction:transaction})
  }

<<<<<<< Updated upstream
  selectQna(transaction:Transaction, qna:any) {
    return QNA.findOne({ where: {QNA_ID: qna.QNA_ID} , transaction: transaction})
  }

  selectQnas(transaction:Transaction, page: number) {
    return QNA.findAll({ offset: (page-1) * 30, limit: 30})  
=======
  selectQna(transaction:Transaction, qnaId:number) {
    return QNA.findOne({ where: {QNA_ID: qnaId} , transaction: transaction})
  }

  selectQnas(transaction:Transaction, page:number) {
    return QNA.findAll({ offset: (page-1) * 30, limit: 30, transaction: transaction})  
>>>>>>> Stashed changes
  }

  updateQna(transaction:Transaction, qna:any) {
    return QNA.update({...qna}, {where: {QNA_ID: qna.QNA_ID}, transaction:transaction})
  }

<<<<<<< Updated upstream
  deleteQna(transaction:Transaction, qna:any) {
    return QNA.destroy({where: {QNA_ID: qna.QNA_ID}, transaction:transaction})
=======
  deleteQna(transaction:Transaction, qnaId:any) {
    return QNA.destroy({where: {QNA_ID: qnaId}, transaction:transaction})
>>>>>>> Stashed changes
  }
}