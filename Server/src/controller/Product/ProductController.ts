import { JsonController, Param, Body, Get, Post, Put, Res, Delete, Params, QueryParams } from "routing-controllers";
import { ProductService } from '../../service';
import { MemberType } from '../../entity';
import { query, Response } from "express";


// Member CRUD 로직
@JsonController()
export class ProductController {
    private productService:ProductService
    constructor() {
        this.productService = new ProductService();
    }

    @Get("/product")
    async selectProducts(@Res() response:Response, @QueryParams() queryParams:any) {
        try {
            console.log('@GET /product')
            if (queryParams.id) {
                let result = await this.productService.selectProduct(queryParams.id);
                return response.status(200).send(result);
            }
            if (queryParams.search) {
                if (queryParams.page) {
                    let result = await this.productService.selectProductsSearch(queryParams.search, queryParams.page);
                    return response.status(200).send(result);
                }
                let result = await this.productService.selectProductsSearch(queryParams.search, 1);
                return response.status(200).send(result);
            }
            if (queryParams.page) {
                let result = await this.productService.selectProductsByPage(queryParams.page);
                return response.status(200).send(result);
            }
            let result = await this.productService.selectProducts();
            return response.status(200).send(result);
        } catch (err) {
            console.log(err);
            return response.status(400).send(err);
        }
    }

    // @Get("/product")
    // async selectProductsByPape(@Res() response:Response, @QueryParam('page') page:number) {
    //     try {
    //         let result = await this.productService.selectProductsByPage(page);
    //         return response.status(200).send(result);
    //     } catch (err) {
    //         return response.status(400).send(err);
    //     }
    // }

    // @Get("/product/:id")
    // async selectProduct(@Res() response:Response, @Param('id') id:number) {
    //     try {
    //         let result = await this.productService.selectProduct(id);
    //         return response.status(200).send(result);
    //     } catch (err) {
    //         return response.status(400).send(err)
    //     }
    // }

    @Get("/product/:search/:page")
    async selectProductsSearch(@Res() response:Response, @Params() params:any) {
        try {
            let result = await this.productService.selectProductsSearch(params.search, params.page);
            return response.status(200).send(result);
        } catch (err) {
            return response.status(400).send(err);
        }
    }
    @Post("/product")
    async insertProduct(@Body() product:any, @Res() response:Response) {
        try {
            let result = await this.productService.insertProduct(product);
            return response.status(200).send(result);
        } catch (err) {
            return response.status(400).send({err})
        }
    }

    @Put("/product/:id")
    async updateProduct(@Body() product:any, @Res() response:Response, @Param('id') id:number) {
        try {
            let result = await this.productService.updateProduct(product, id);
            return response.status(200).send(result);
        } catch (err) {
            return response.status(400).send({err})
        }
    }

    @Delete("/product/:id")
    async deleteProduct( @Res() response:Response, @Param('id') id:number) {
        try {
            let result = await this.productService.deleteProduct(id);
            return response.status(200).send(result);
        } catch (err) {
            return response.status(400).send({err})
        }
    }
}
