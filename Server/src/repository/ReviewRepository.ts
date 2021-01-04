import { Review } from "../model/Review";
import { Transaction } from "sequelize/types";
import { ReviewType } from '../entity'

export class ReviewRepository {
  async selectReview(user_id: string) {
    return Review.findAll({ where : {user_id: user_id}})
  }
  
  async selectReviewByPost(prod_id: number) {
    return Review.findAll({ where : {prod_id: prod_id}})
  }

  async insertReview(transaction:Transaction, review:ReviewType) {
    return Review.create({...review}, {transaction:transaction})
  }

  async updateReview(transaction:Transaction, re_id:number, review: ReviewType) {
    return Review.update({...review }, {where: {re_id: re_id}, transaction:transaction})
  }

  async deleteReview(transaction:Transaction, re_id:number) {
    return Review.destroy({where: {re_id: re_id}, transaction:transaction})
  }
}