package com.chulm.trello.domain.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class Member {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(nullable=false)
    long id;

    @Column(nullable=false)
    String name;
}
