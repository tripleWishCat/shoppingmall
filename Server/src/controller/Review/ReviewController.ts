import { Response } from "express";
import { ReviewService } from '../../service'
import { ReviewType  } from '../../entity'
import { checkJwt, checkIdentity } from '../../middleware/Auth'
import { JsonController, Param, Body, Get, Post, Put, Res, Delete, UseBefore, Req } from "routing-controllers";


@JsonController()
export class MemberController {
    reviewService : ReviewService
    constructor() { this.reviewService = new ReviewService() }

    // 리뷰 생성 요청
    @UseBefore(checkJwt)
    @Post("/review")
    async createMember(@Body() review: ReviewType, @Res() response:Response) {
      try {
        await this.reviewService.createReview(review)
        return response.status(200).send(review)
      } catch (err) {
        return response.status(400).send(err)
      }
    }

    @UseBefore(checkJwt, checkIdentity)
    @Get("/review/:id")
    async readUserReviews(@Param("id") id:string, @Res() response:Response) {
      try {
        const result = await this.reviewService.readUserReviews(id)
        return response.status(200).send(result)
      } catch (err) {
        return response.status(400).send(err)
      }
  }
}