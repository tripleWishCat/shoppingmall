import { Controller, Param, Body, Post, Res } from "routing-controllers";
import { makeResult } from '../../middleware'
import { MemberType } from '../../entity'
import { MemberRepository } from '../../repository'

// Service를 거칠 필요가 없는 듯 하다
@Controller()
export class MemberController {
    memberRepository : MemberRepository
    constructor() { this.memberRepository = new MemberRepository() }

    // 로그인 요청
    @Post("/member/login")
    async logIn(@Body() member: MemberType, @Res() response:any) {
        let res
        try {
            const result = await this.memberRepository.login(member)
            if (result) {
                res = makeResult(200, result)
            } else {
                res = makeResult(403, result)
            }
        } catch (err) {
            res = makeResult(400, err)
        }
        return response.status(res.status)
    }

    

    // 비밀번호 확인 요청
    @Post("/member/check_password")
    checkPassword(@Body() member: {}) {
        return "비밀번호 확인 및 회원정보 응답"
    }    
}