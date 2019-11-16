package com.chulm.trello.app.controller;

import com.chulm.trello.app.service.MemberService;
import com.chulm.trello.domain.model.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MemberController {

    @Autowired
    MemberService memberService;

    /*
        http://localhost:8080/api/members
      */
    @GetMapping("/members")
    public List<Member> getAll(){
        return memberService.getAll();
    }
}
