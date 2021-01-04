import sequelize from "../model/db";
import { ReviewRepository } from '../repository'
import { ReviewType } from '../entity'


export class ReviewService {
  ReviewRepo : ReviewRepository
  constructor () {this.ReviewRepo = new ReviewRepository()}

  async insertReview (review: ReviewType) {
    const transaction = await sequelize.transaction()
    try {
      const result = await this.ReviewRepo.insertReview(transaction, review);
      await transaction.commit()
      return result
    } catch (err) {
      await transaction.rollback()
      throw err
    }
  }

  async selectReview (user_id: string) {
    try {
      const result = await this.ReviewRepo.selectReview(user_id);
      return result;
    } catch (err) {
      throw err
    }
  }

  async selectReviewByProd (prod_id: number) {
    try {
      const result = await this.ReviewRepo.selectReviewByPost(prod_id);
      return result;
    } catch (err) {
      throw err
    }
  }

  async updateReview (reId: number, review: ReviewType) {
    const transaction = await sequelize.transaction()
    try {
      const result = await this.ReviewRepo.updateReview(transaction, reId, review);
      return result;
    } catch (err) {
      throw err
    }
  }

  async deleteRevice (reId: number) {
    const transaction = await sequelize.transaction()
    try {
      const result = await this.ReviewRepo.deleteReview(transaction, reId);
      return result;
    } catch (err) {
      throw err
    }
  }
}