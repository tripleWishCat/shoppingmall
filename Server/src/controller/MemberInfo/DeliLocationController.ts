import { JsonController, Param, Body, Get, Post, Put, Res, Delete, Params, Req } from "routing-controllers";
import { DeliLocationService } from '../../service'
import { DeliLocationType } from '../../entity'
import { Request, Response } from "express";
import DeliLocation from "../../model/DeliLocation";


@JsonController()
export class MemberController {
    DeliLocationService : DeliLocationService
    constructor() { this.DeliLocationService = new DeliLocationService() }

    // 유저의 새로운 배송지 추가 요청
    @Post("/delilocation/new")
    async createDeliLocation(@Body() deliLocation: DeliLocationType, @Res() response:Response) {
        try {
            await this.DeliLocationService.createDeliLocation(deliLocation)
            return response.status(200).send()
        } catch (err) {
            return response.status(400).send(err)
        }
    }

    // 유저의 모든 배송지 정보 요청
    @Get("/delilocations/:user_id")
    async readDeliLocationList(@Param("user_id") user_id: string, @Res() response:Response) {
        try {
            const result = await this.DeliLocationService.readDeliLocations(user_id)
            return response.status(200).json(result)
        } catch (err) {
            return response.status(400).send(err)
        }
    }

    // 유저의 배송지 수정 요청
    @Put("/delilocation/:user_id/:id")
    async updateDeliLocation(@Param("user_id") user_id: string, @Param("id") id: number, @Body() deliLocation:DeliLocationType, @Res() response:Response) {
        try {
            await this.DeliLocationService.updateDeliLocation(user_id, id, deliLocation)
            return response.status(200).send()
        } catch (err) {
            return response.status(400).send(err)
        }
    }


    // 유저의 배송지 삭제 요청
    @Delete("/delilocation/:use_id/:id")
    async deleteDeliLocation(@Param("user_id") user_id: string, @Param("id") id: number, @Res() response:Response) {
        try {
            await this.DeliLocationService.deleteDeliLocation(user_id, id)
            return response.status(200).send()
        } catch (err) {
            return response.status(400).send(err)
        }
    }
}