-- ONLY H2
DROP TABLE IF EXISTS TRELLO_MEMBER;

CREATE TABLE TRELLO_MEMBER (
  ID BIGINT NOT NULL AUTO_INCREMENT,
  NAME VARCHAR(32) NOT NULL,
  PRIMARY KEY (ID)
);