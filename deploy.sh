#!/bin/sh
####################################################################
##
## deploy scripts requirements
##  - JDK >= 8
##  - git core
##  - docker engine
##
####################################################################

## 1. Clone git repository
# checkout the current version of source code
git pull https://github.com/chulman/git-trello.git

# after add upstream
# -- git fetch origin upstrem

## 2. Build and test
# build projects under the gradle
./gradlew clean build

# check test reports
# - Travis.CI complete


## 3. Back docker images and push
# bake docker images
docker build -t chulm/trello/app:latest trello-app
docker build -t chulm/trello/web:latest trello-web
docker build -t chulm/trello/nginx:latest trello-nginx

# upload docker images ( Docker Hub )
# TODO

# pull & run docker compose
docker-compose up -d
