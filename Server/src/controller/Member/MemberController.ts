import { JsonController, Param, Body, Get, Post, Put, Res, Delete } from "routing-controllers";
import { MemberService } from '../../service'
import { makeResult } from '../../middleware'
import { MemberType } from '../../entity'

// Member CRUD 로직
@JsonController()
export class MemberController {
    memberService : MemberService
    constructor() { this.memberService = new MemberService() }

    // 회원가입 요청
    @Post("/member")
    async createMember(@Body() member: MemberType, @Res() response:any) {
        let res
        try {
            const result = await this.memberService.createMember(member)
            res = makeResult(200, result)
        } catch (err) {
            res = makeResult(400, err)
        }
        return response.status(res.status)
    }

    // 회원정보 요청
    @Get("/member/:id")
    readMember(@Param("id") id: string, @Body() member: {}) {
        return "회원정보 요청 로직"
    }

    // 회원정보수정 요청
    @Put("/member/:id")
    updateMember(@Param("id") id: string, @Body() members: {}) {
        return "회원 정보 수정 로직"
    }

    // 회원정보삭제 요청
    @Delete("/member/:id")
    async deleteMember(@Param("id") id: string, @Res() response:any) {
        let res
        try {
            const result = await this.memberService.deleteMember(id)
            res = makeResult(200, result)
        } catch (err) {
            res = makeResult(400, err)
        }
        return response.status(res.status)
    }
}