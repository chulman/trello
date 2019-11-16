package com.chulm.trello.app.service;

import com.chulm.trello.domain.model.Member;
import com.chulm.trello.domain.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MemberService {

    @Autowired
    MemberRepository memberRepository;

    public List<Member> getAll(){
        return memberRepository.findAll();
    }
}
