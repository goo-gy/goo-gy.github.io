---
layout: post
title: "[React] Webpack을 이용한 React 개발 환경 구축"
excerpt: "언제까지 CRA 쓸래?"
tags: [web, react, project]

path: "/2021-12-31-webpack-react"
featuredImage: "./webpack.png"
created: 2021-12-31
updated: 2021-12-31
---

## [ Webpack이란? ]  
webpack은 여러 개의 모듈(javascript, css, html, image 등)을 하나의 파일로 묶어주는 module bundler이다. React를 통해 개발을 한다면 기능을 여러 Component로 분리할 것이다. 이 분리된 module 들을 하나의 javascript로 bundle 해주는 것이 webpack이다. 또 webpack은 ~~를 해주는 babel을 적용할 수 있고, console.log() 등 실제 서비스에서는 필요없는 코드를 자동으로 제거하는 등 여러 기능을 포함하고 있다. 

### webpack 속성  
webpack에서 우리가 설정해 주어야 할 중요한 속성은 다음 4가지 정도이다.  
- Entry  
  변환하려는 module의 시작점  
- Output  
  Webpack이 bunlde한 결과물
- Loader  
  webpack이 javascript, json 외에 다른 자원(html, css, image 등)을 bundle할 수 있도록 해줌
- Plugin  

일단은 이 정도만 알아두고 직접 설정을 해보면서 자세히 공부해보자.  


## [ Webpack을 이용한 React 개발 ]  
### 설치  
- init  

만들 프로젝트 폴더 내에서 package.json 생성
```bash
npm init -y
```  

``` json
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}

```

-  react 환경 설치  

```bash
npm i react react-dom
```  

-  webpack 설치  

```bash
npm i --save-dev webpack webpack-cli
```  
- `--save-dev` 옵션
    개발환경에만 설치 (devDependencies)
    webpack은 개발환경에서만 필요하기 때문에 `--save-dev` 옵션을 사용하였다.  


모두 설치하면 다음과 같이 
``` json
...
  "devDependencies": {
    "@babel/core": "^7.16.5",
    "@babel/preset-env": "^7.16.5",
    "@babel/preset-react": "^7.16.5",
    "babel-loader": "^8.2.3",
    "html-loader": "^3.0.1",
    "html-webpack-plugin": "^5.5.0",
    "webpack": "^5.65.0",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.7.2"
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
...
```
`--save-dev` 옵션을 준 module은 dependencies가 아닌 devDependencies에 설치된 것을 확인할 수 있다.  

---  

### React code  
src 폴더를 생성해서 react source file을 작성하자.  
- src/index.js  

``` js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```  

- src/App.js  

``` js
import React from 'react';

const App = () => {
    return (
        <div>
            Webpack App!
        </div>
    );
};

export default App;
```  

우리는 이 React Component들을 webpack을 이용해 하나의 js파일로 번들링할 것이다.  

## [ webpack.config.js 작성 ]  
프로젝트 폴더에 `webpack.config.js` 파일을 만들어 webpack 설정을 작성해보자.  

### entry & output
기본적인 webpack 설정부터 차근차근 알아보자.  
- mode  
  development/production 모드를 설정할 수 있다.  
- **entry (입력)**  
  entry는 bundle할 대상을 지정하는 것으로 시작점인 `src/index.js`로 설정하자  
- **output (출력)**  
  output은 bundle된 결과물의 파일 이름을 설정해주면 된다.  
  path도 설정해줄 수 있지만 default는 dist 폴더이다.  

``` js
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
};
```  

### webpack 실행
``` shell
npx webpack
```  

- error  

```
ERROR in ./src/index.js 5:16
Module parse failed: Unexpected token (5:16)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders| import App from './App';
|
> ReactDOM.render(<App />, document.getElementById('root'));
|
```  
에러 메세지를 보면 JSX 코드 부분을 webpack에서 처리하려면 적절한 loader가 필요하다고 한다.  


### loader (with babel)
- **loader**  
  loader는 webpack이 js, json외에는 bundling 할 수 없기 때문에 다른 자원을 load할 수 있도록 도와주는 것이다.  

jsx 문법을 bundling 하기 위해서는 다음 모듈들이 필요하다.  
- babel-loader  
- @babel/preset-env  
- @babel/preset-react  

``` shell
npm i --save-dev babel-loader @babel/preset-env @babel/preset-react
```  

``` js
module.exports = {
  ...
  module: {
    rules: [
        {
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        }
    ]
  }
};
```
다시 실행하면 dist 디렉토리에 bundle.js가 성공적으로 생성되었을 것이다.  
그러면 `index.html`을 생성하여 bundle.js를 불러와 보자.  
- index.html  

``` html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Webpack-for-react</title>
</head>

<body>
    <div id="root"></div>
    <script src="./dist/bundle.js" ></script>
</body>
</html>
```
`index.html`을 열어보면 React Component가 성공적으로 렌더링된 것을 확인할 수 있다.  
[ 그림 ]  


## [ Plugin ]
HtmlWebpackPlugin을 이용하면 따로 작성하지 않아도 Webpack에서 알아서 bundle.js를 불러오는 html을 생성해준다.    

### 설치  
``` shell
npm install --save-dev html-loader
npm install --save-dev html-webpack-plugin
```
### webpack.config.js  


### html 파일  
``` html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Webpack-for-react</title>
</head>

<body>
    <div id="root"></div>
</body>
</html>
```
앞에서와 달리 script를 제거하였다.  

### webpack-dev-server  
``` shell
npm i --save-dev webpack-dev-server
```