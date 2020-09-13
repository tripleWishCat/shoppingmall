import { Controller, Param, Body, Get, Post, Put } from "routing-controllers";
import { MemberService } from '../../service'
import { response } from "express";
import { makeResult } from '../../middleware'


@Controller()
export class MemberController {
    constructor(private MemberService:MemberService) {
        console.log('Member Controller Constructed')
    }
    // 회원가입 요청
    @Post("/member/")
    async createMember(@Body() member: {}) {
        let res
        try {
            const result = await this.MemberService.createMember(member)
            res = makeResult(200, result)
        } catch (err) {
            res = makeResult(400, err)
        }
        return response.status(res.status).send(res.data)
    }

    // 회원정보 요청
    @Get("/member/:id")
    readMember(@Param("id") id: number, @Body() member: {}) {
        return "회원가입 처리 로직"
    }

    // 회원정보수정 요청
    @Put("/member/:id")
    updateMember(@Param("id") id: number, @Body() members: {}) {
        return "회원 정보 수정 로직"
    }

    // 회원정보삭제 요청
    @Post("/member/:id")
    deleteMember(@Param("id") id: number,  @Body() members: {}) {
        return "회원 정보 수정 로직"
    }
}