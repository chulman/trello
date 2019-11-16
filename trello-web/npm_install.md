## install
```npm
# set package.json
npm init -y

# webpack install
npm install --save-dev webpack webpack-dev-server webpack-cli
# 여러 config파일들을 합쳐줍니다.
npm install --save-dev webpack-merge
  
npm i --save express react react-dom react-router-dom react-redux redux prop-types lodash

npm i --save @material-ui/core @material-ui/icons

# https://www.npmjs.com/paackage/history
#  세션 기록을 쉽게 관리 할 수있는 JavaScript 라이브러리
npm i --save history
#babel
npm install --save-dev babel-core babel-loader@7 babel-preset-env
npm install --save-dev babel-preset-react
npm install --save-dev babel-preset-stage-2
npm install babel-preset-stage-2 --save-dev

npm install --save-dev react-hot-loader
 
#따로 분리하여 bundle한 css파일과 js파일을 각각 html 파일에 link 태그와 script태그로 추가해줘야 하는데 이를 돕는 것이 HtmlWebpackPlugin
npm install --save-dev html-webpack-plugin

# copy-webpack-plugin : copies individual files or entire directories to the build directory.
# ref : https://github.com/webpack-contrib/copy-webpack-plugin
npm install --save-dev copy-webpack-plugin 

# 프로젝트에서 NODE_PATH 를 사용하여 절대경로로 파일을 불러오기 위하여 환경 변수를 설정 할 때 운영체제마다 방식이 다르므로 공통적인 방법으로 설정 할 수 있게 해주는 라이브러리.
npm install --save-dev cross-env

## trello like kanban-board
## https://reactjsexample.com/pluggable-components-to-add-a-trello-like-kanban-board-to-your-application/
npm install --save react-trello

 
  
```