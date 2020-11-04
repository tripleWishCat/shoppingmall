import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@Controller()
export class MainController {
    @Get("/")
    getAll() {
        return "Main get"
    }
}