import { Review } from "../model/Review";
import { Transaction } from "sequelize/types";
import { ReviewType } from '../entity'

export class ReviewRepository {
  createReview(transaction:Transaction, review:ReviewType) {
    return Review.create({...review}, {transaction:transaction})
  }

  readUserReviews(transaction:Transaction, id: string) {
    return Review.findAll({ where : {user_id: id} , transaction: transaction})
  }

  updateReview(transaction:Transaction, re_id:number, review: ReviewType) {
    return Review.update({...review }, {where: {re_id: re_id}, transaction:transaction})
  }

  deleteReview(transaction:Transaction, re_id:number) {
    return Review.destroy({where: {re_id: re_id}, transaction:transaction})
  }
}