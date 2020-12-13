import { JsonController, Param, Body, Get, Post, Put, Res, Delete, Params, QueryParams, Req } from "routing-controllers";
import { OrderService } from '../../service';
import { MemberType } from '../../entity';
import { Response, Request, response } from "express";


// Member CRUD 로직
@JsonController()
export class OrderController {
    private orderService:OrderService
    constructor() {
        this.orderService = new OrderService();
    }

    @Get("/order")
    async selectOrder(@Res() response:Response, @QueryParams() queryParams:any) {
        try {
            if (queryParams.id) {
                let result = await this.orderService.selectOrder(queryParams.id);
                return response.status(200).send(result);
            }
            if (queryParams.userId) {
                if (queryParams.page) {
                    let result = await this.orderService.selectOrdersByUserId(queryParams.userId, queryParams.page);
                    return response.status(200).send(result);
                }
                let result = await this.orderService.selectOrdersByUserId(queryParams.userId, 1);
                return response.status(200).send(result);
            }
            if (queryParams.page) {
                let result = await this.orderService.selectOrdersByPage(queryParams.page);
                return response.status(200).send(result);
            }
            let result = await this.orderService.selectOrders();
            return response.status(200).send(result);
        } catch (err) {
            return response.status(400).send({err});
        }
    }

    @Post("/order")
    async getOrderNumber(@Res() response:Response, @Req() request:Request) {
        try {
            // TODO(userId 받아올수 있도록 개발)
            let result = await this.orderService.getOrderNumber();
            return response.status(200).send(result);
        } catch(err) {
            return response.status(400).send({err})
        }
    }

    @Put("/order")
    async updateOrder(@Res() response:Response, @Req() request:Request, @Body() order:any) {
        try {
            // TODO(userId 받아올수 있도록 개발)
            let result = await this.orderService.updateOrder(order);
            return response.status(200).send(result)
        } catch(err) {
            return response.status(400).send({err})
        }
    }
}