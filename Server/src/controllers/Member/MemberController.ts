import { Controller, Param, Body, Get, Post, Put, Delete } from "routing-controllers";

@Controller()
export class MemberController {
    // 회원가입 요청
    @Post("/member/")
    createMember(@Body() member: {}) {
        return "회원가입 처리 로직"
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