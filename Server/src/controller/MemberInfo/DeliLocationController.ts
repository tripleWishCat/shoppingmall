import { JsonController, Param, Body, Get, Post, Put, Res, Delete, UseBefore } from "routing-controllers";
import { DeliLocationService } from '../../service'
import { DeliLocationType } from '../../entity'
import { Response } from "express";
import { checkJwt, checkIdentity } from '../../middleware/Auth'

@UseBefore(checkJwt)
@JsonController()
export class MemberController {
    DeliLocationService : DeliLocationService
    constructor() { this.DeliLocationService = new DeliLocationService() }

    // 유저의 새로운 배송지 추가 요청
    @UseBefore(checkJwt)
    @Post("/delilocation")
    async createDeliLocation(@Body() deliLocation: DeliLocationType, @Res() response:Response) {
        try {
            await this.DeliLocationService.createDeliLocation(deliLocation)
            return response.status(200).send(deliLocation)
        } catch (err) {
            return response.status(400).send(err)
        }
    }

    // 유저의 모든 배송지 정보 요청
    @UseBefore(checkJwt, checkIdentity)
    @Get("/delilocations/:id")
    async readDeliLocationList(@Param("id") id: string, @Res() response:Response) {
        try {
            const result = await this.DeliLocationService.readDeliLocations(id)
            return response.status(200).json(result)
        } catch (err) {
            return response.status(400).send(err)
        }
    }

    // 유저의 배송지 수정 요청
    @UseBefore(checkJwt, checkIdentity)
    @Put("/delilocation/:id/:deli_loc_id")
    async updateDeliLocation(@Param("deli_loc_id") deli_loc_id:number, @Body() deliLocation:DeliLocationType, @Res() response:Response) {
        try {
            await this.DeliLocationService.updateDeliLocation(deli_loc_id, deliLocation)
            return response.status(200).send(deliLocation)
        } catch (err) {
            return response.status(400).send(err)
        }
    }


    // 유저의 배송지 삭제 요청
    @UseBefore(checkJwt, checkIdentity)
    @Delete("/delilocation/:id/:deli_loc_id")
    async deleteDeliLocation(@Param("deli_loc_id") deli_loc_id:number, @Res() response:Response) {
        try {
            await this.DeliLocationService.deleteDeliLocation(deli_loc_id)
            return response.status(200).send({"deli_loc_id":deli_loc_id})
        } catch (err) {
            return response.status(400).send(err)
        }
    }
}