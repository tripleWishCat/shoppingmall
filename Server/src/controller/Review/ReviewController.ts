import { Response, Request } from "express";
import { ReviewService } from '../../service'
import { ReviewType  } from '../../entity'
import { checkJwt, checkIdentity } from '../../middleware/Auth'
import { JsonController, Param, Body, Get, Post, Put, Res, Delete, UseBefore, Req, QueryParams } from "routing-controllers";


@JsonController()
export class ReviewController {
    reviewService : ReviewService
    constructor() { this.reviewService = new ReviewService() }

    // 리뷰 생성 요청
    // @UseBefore(checkJwt)
    @Post("/review")
    async insertReview(@Body() review: ReviewType, @Res() response:Response) {
      try {
        await this.reviewService.insertReview(review)
        return response.status(200).send(review)
      } catch (err) {
        return response.status(400).send(err)
      }
    }

    // @UseBefore(checkJwt, checkIdentity)
    @Get("/review")
    async selectReview(@QueryParams() queryParams: any, @Res() response:Response) {
      try {
        if (queryParams.userId) {
          const result = await this.reviewService.selectReview(queryParams.userId)
          return response.status(200).send(result) 
        }
        if (queryParams.prodId) {
          const result = await this.reviewService.selectReview(queryParams.prodId)
          return response.status(200).send(result)
        }
        return response.status(200).send({})
      } catch (err) {
        return response.status(400).send(err)
      }
  }

  @Put("/review")
  async updateReview(@Body() review: ReviewType, @Res() response:Response, @Req() request:Request) {
    try {
      const result = await this.reviewService.updateReview(review.re_id, review);
      return response.status(200).send(result);
    } catch(err) {
      return response.status(400).send(err);
    }
  }

  @Delete("/review")
  async deleteReview(@QueryParams() queryParams: any, @Res() response:Response, @Req() request:Request) {
    try {
      if (queryParams.reId) {
        const result = await this.reviewService.deleteRevice(queryParams.reId);
        return response.status(200).send(result);
      }
      return response.status(400).send({});
    } catch(err) {
      return response.status(400).send(err);
    }
  }
}