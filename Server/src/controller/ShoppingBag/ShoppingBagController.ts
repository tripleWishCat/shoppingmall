import { Response, Request } from "express";
import { ShoppingBagService } from '../../service'
import { ReviewType  } from '../../entity'
import { checkJwt, checkIdentity } from '../../middleware/Auth'
import { JsonController, Param, Body, Get, Post, Put, Res, Delete, UseBefore, Req, QueryParams } from "routing-controllers";


@JsonController()
export class ShoppingBagController {
    shoppingBagService : ShoppingBagService
    constructor() { this.shoppingBagService = new ShoppingBagService() }

    // @UseBefore(checkJwt)
    // @UseBefore(checkJwt, checkIdentity)
    @Post("/shoppingbag")
    async insertShoppingBag(@Body() shoppingbag: any, @Res() response:Response) {
      try {
        const reuslt = await this.shoppingBagService.insertShoppingBag(shoppingbag);
        return response.status(200).send(reuslt);
      } catch (err) {
        return response.status(400).send(err)
      }
    }

    // @UseBefore(checkJwt, checkIdentity)
    @Get("/shoppingbag")
    async selectShoppingBag(@QueryParams() queryParams: any, @Res() response:Response) {
      try {
        if (queryParams.userId) {
          const result = await this.shoppingBagService.selectShoppingBag(queryParams.userId);
          return response.status(200).send(result); 
        }
          return response.status(200).send({});
      } catch (err) {
        return response.status(400).send(err)
      }
    }

    // @UseBefore(checkJwt, checkIdentity)
    @Put("/shoppingbag")
    async updateShoppingBag(@Body() shoppingbag: any, @Res() response:Response) {
      try {
        const reuslt = await this.shoppingBagService.insertShoppingBag(shoppingbag);
        return response.status(200).send(reuslt);
      } catch (err) {
        return response.status(400).send(err)
      }
    }
}