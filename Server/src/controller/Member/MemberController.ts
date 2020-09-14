import { JsonController, Param, Body, Get, Post, Put, Res } from "routing-controllers";
import { MemberService } from '../../service'
import { response } from "express";
import { makeResult } from '../../middleware'
import { MemberType } from '../../entity'


@JsonController()
export class MemberController {
    constructor() {
        console.log('Member Controller Constructed')
    }
    // 회원가입 요청
    @Post("/member")
    async createMember(@Body() member: MemberType) {
        let res
        try {
            console.log('I got this member', member)
            const memberService = new MemberService
            const result = await memberService.createMember(member)
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