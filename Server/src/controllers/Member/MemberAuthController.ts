import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@Controller()
export class MemberController {
    // 로그인 요청
    @Post("/member/login")
    logIn(@Body() member: {}) {
        return "로그인 처리 로직"
    }

    // 비밀번호 확인 요청
    @Post("/member/check_password")
    checkPassword(@Body() member: {}) {
        return "비밀번호 확인 및 회원정보 응답"
    }    
}