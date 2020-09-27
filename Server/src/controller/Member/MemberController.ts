import { JsonController, Param, Body, Get, Post, Put, Res, Delete } from "routing-controllers";
import { MemberService } from '../../service'
import { MemberType } from '../../entity'
import { Response } from "express";
import { MemberRepository } from "../../repository";

// Member CRUD 로직
@JsonController()
export class MemberController {
    memberService : MemberService
    constructor() { this.memberService = new MemberService() }

    // 회원가입 요청
    // TODO : 이미존재하는 유저 체크하는 로직 추가?
    @Post("/member/new")
    async createMember(@Body() member: MemberType, @Res() response:Response) {
        try {
            await this.memberService.createMember(member)
            return response.status(200).send()
        } catch (err) {
            return response.status(400).send(err)
        }
    }

    // 로그인 요청
    @Post("/member")
    async login(@Body() member: MemberType, @Res() response:Response) {
        try {
            await this.memberService.login(member)
            return response.status(200).send()
        } catch (err) {
            return response.status(400).send(err)
        }
    }

    // 회원정보 요청
    @Get("/member/:id")
    async readMember(@Param("id") id: string, @Res() response:any) {
        try {
            const result = await this.memberService.readMember(id)
            return response.status(200).json(result)
        } catch (err) {
            return response.status(400).json(err)
        }
    }

    // 회원정보수정 요청
    @Put("/member/:id")
    async updateMember(@Param("id") id: string, @Body() member: MemberType, @Res() response:any) {
        try {
            await this.memberService.updateMember(id, member)
            return response.status(200).send()
        } catch (err) {
            return response.status(400).send(err)
        }
    }

    // 회원정보삭제 요청
    @Delete("/member/:id")
    async deleteMember(@Param("id") id: string, @Res() response:Response) {
        try {
            await this.memberService.deleteMember(id)
            return response.status(200).send()
        } catch (err) {
            return response.status(400).send(err)
        }
    }
}