import { JsonController, Param, Body, Get, Post, Put, Res, Delete, Params, QueryParams, Controller } from "routing-controllers";
import { ImportService } from '../../service';
import {  Response } from "express";


@Controller()
export class ImportController {
    private importService:ImportService
    constructor() {
        this.importService = new ImportService();
    }

    @Get("/import/getToken")
    async getToken(@Res() response:Response) {
        try {
            console.log('@GET /import/getToken')
            let result = await this.importService.getToken();
            return response.status(200).send(result);
        } catch (err) {
            console.log(err);
            return response.status(400).send(err);
        }
    }

    @Get("/import/payment")
    async getPayments(@Res() response:Response, @QueryParams() params:any) {
        try {
            console.log('@GET /import/getToken')
            if (params.merchantUid) {
                let result = await this.importService.getPaymentByMerchantUid(params.merchantUid);
                return response.status(200).send(result); 
            }
            let result = await this.importService.getPayment();
            return response.status(200).send(result);
        } catch (err) {
            console.log(err);
            return response.status(400).send(err);
        }
    }
}
