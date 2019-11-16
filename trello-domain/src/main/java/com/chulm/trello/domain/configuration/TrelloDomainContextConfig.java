package com.chulm.trello.domain.configuration;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EntityScan("com.chulm.trello.model")
@EnableJpaRepositories("com.chulm.trello.domain.repository")
public class TrelloDomainContextConfig {
}
