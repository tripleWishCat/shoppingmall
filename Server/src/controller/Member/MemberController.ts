import { JsonController, Param, Body, Get, Post, Put, Res, Delete, UseBefore, Req } from "routing-controllers";
import { MemberService } from '../../service'
import { MemberType, changingSecretBodyType  } from '../../entity'
import { Request, Response } from "express";
import { createJwt, checkJwt, checkIdentity } from '../../middleware/Auth'

// Member CRUD 로직

@JsonController()
export class MemberController {
    memberService : MemberService
    constructor() { this.memberService = new MemberService() }

    // 회원가입 요청
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
            const jwt = createJwt(member)
            return response.status(200).send({ jwt })
        } catch (err) {
            return response.status(400).send(err)
        }
    }

    // 회원정보 요청
    @UseBefore(checkJwt, checkIdentity)
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
    @UseBefore(checkJwt, checkIdentity)
    @Put("/member/:id")
    async updateMember(@Param("id") id: string, @Body() member: MemberType, @Res() response:any) {
        try {
            if (member.pwd) throw Error('Wrong access to change password.')
            await this.memberService.updateMember(id, member)
            return response.status(200).send()
        } catch (err) {
            return response.status(400).send(err)
        }
    }

    //비밀번호수정 요청
    @UseBefore(checkJwt, checkIdentity)
    @Put("/member/:id/secret")
    async updateMemberSecret(@Req() request:any, @Param("id") id: string, @Body() pwds: changingSecretBodyType, @Res() response:any) {
        try {
            await this.memberService.updateMemberSecret(id, request.headers.userInfo, pwds)
            return response.status(200).send()
        } catch (err) {
            return response.status(400).send(err)
        }
    }

    // 회원정보삭제 요청
    @UseBefore(checkJwt, checkIdentity)
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