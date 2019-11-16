package com.chulm.trello.domain.repository;

import com.chulm.trello.domain.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
