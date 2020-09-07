import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@Controller()
export class MemberController {
    @Get("/members")
    getAll() {
        return "This action returns all users"
    }
}