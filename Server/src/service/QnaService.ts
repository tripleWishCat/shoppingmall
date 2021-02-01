import { transcode } from "buffer";
import { Transaction } from "sequelize/types";
import sequelize from "../model/db";
import { QnaRepository } from '../repository'


export class QnaService {
  qnaRepo : QnaRepository
  constructor () {this.qnaRepo = new QnaRepository()}

  async insertReview (qna: any) {
    const transaction = await sequelize.transaction();
    try {
      const result = await this.qnaRepo.insertQna(transaction, qna);
      await transaction.commit();
      return result;
    } catch (err) {
      await transaction.rollback()
      throw err;
    }
  }

  async selectQna (qnaId: any) {
    const transaction = await sequelize.transaction();
    try {
      const result = await this.qnaRepo.selectQna(transaction, qnaId);
      return result;
    } catch (err) {
      throw err
    }
  }

  async selectQnas (page: number) {
    const transaction = await sequelize.transaction();
    try {
      const result = await this.qnaRepo.selectQnas(transaction, page);
      return result;
    } catch (err) {
      throw err
    }
  }

  async updateQna (qna: any) {
    const transaction = await sequelize.transaction()
    try {
      const result = await this.qnaRepo.updateQna(transaction, qna);
      return result;
    } catch (err) {
      throw err
    }
  }

  async deleteQna (qnaId: number) {
    const transaction = await sequelize.transaction()
    try {
      const result = await this.qnaRepo.deleteQna(transaction, qnaId);
      return result;
    } catch (err) {
      throw err
    }
  }
}