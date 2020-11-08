import sequelize from "../model/db";
import { ReviewRepository } from '../repository'
import { ReviewType } from '../entity'


export class ReviewService {
  ReviewRepo : ReviewRepository
  constructor () {this.ReviewRepo = new ReviewRepository()}

  async createReview (review: ReviewType) {
    const transaction = await sequelize.transaction()
    try {
      await this.ReviewRepo.createReview(transaction, review)
      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  }

  async readUserReviews (id: string) {
    const transaction = await sequelize.transaction()
    try {
      await this.ReviewRepo.readUserReviews(transaction, id)
      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      throw err
    }
}