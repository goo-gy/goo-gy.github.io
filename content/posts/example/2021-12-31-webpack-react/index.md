---
layout: post
title: "[Webpack] Webpack을 이용한 React 개발"
excerpt: "언제까지 CRA 쓸거야?"
tags: [web, react, project, webpack]

path: "/2021-12-31-webpack-react"
featuredImage: "./webpack.png"
created: 2021-12-31
updated: 2022-01-02
---

## [ Webpack이란? ]  
webpack은 여러 개의 모듈(javascript, css, html, image 등)을 하나의 javascript 파일로 묶어주는 모듈 번들러(bundler)이다. React를 통해 개발을 한다면 기능을 여러 컴포넌트로 분리할 것이다. webpack은 이 분리된 자원들을 하나의 javascript로 변환해 준다. 또 webpack은 JSX를 해석해 주는 babel을 적용할 수 있고, 코드 최적화 수행, `console.log()`와 같이 실제 서비스에서는 필요 없는 코드를 자동으로 제거하는 등 여러 기능을 사용할 수 있다.  

### webpack 속성  
webpack에서 우리가 설정해 주어야 할 중요한 속성은 다음 4가지 정도이다.  
- **Entry**  
  webpack을 통해 변환하려는 자원의 최초 진입점  
- **Output**  
  Webpack이 변환한 파일의 경로(이름)  
- **Loader**  
  webpack이 javascript 외 다른 자원(html, css, image 등)을 변환할 수 있도록 해줌
- **Plugin**  
  추가적인 기능, 주로 결과물의 형태를 바꾸는 역할에 사용  

일단은 이 정도만 알아두고 직접 설정을 해보면서 자세히 공부해보자.  


## [ Webpack을 이용한 React 개발 ]  
### 설치  
- init  

만들 프로젝트 디렉터리 내에서 package.json 생성
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
npm install react react-dom
```  

-  webpack 설치  

```bash
npm install --save-dev webpack webpack-cli
```  
- `--save-dev` 옵션
    개발 환경에만 설치 (devDependencies)
    webpack은 개발 환경에서만 필요하기 때문에 `--save-dev` 옵션을 사용하였다.  


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
src 디렉터리를 생성해서 react source file을 작성하자.  
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

우리는 이 React Component들을 webpack을 이용해 하나의 javascript 파일로 변환할 것이다.  

## [ webpack.config.js 작성 ]  
프로젝트 디렉터리에 `webpack.config.js` 파일을 만들어 기본적인 webpack 설정부터 차근차근 알아보자.  

### entry & output
- mode  
  development/production 모드를 설정할 수 있다.  
- **entry (입력)**  
  entry는 변환할 대상을 지정하는 것으로 시작점인 `src/index.js`로 설정하자  
- **output (출력)**  
  output은 변환된 결과물의 파일 이름을 설정해 주면 된다.  
  path도 설정해 줄 수 있지만 default는 dist 디렉터리이다.  

``` js
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
};
```  

그럼 webpack을 실행해 보자.
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
에러를 보면 JSX 코드 부분을 webpack에서 처리하려면 적절한 loader가 필요하다고 한다.  


### loader (with babel)
loader는 webpack이 javascript만 변환할 수 있기 때문에 다른 자원을 load 할 수 있도록 도와주는 기능이다.  
JSX 문법을 변환하기 위해서는 babel과 특정 preset들이 필요하다.  
- babel-loader  
- @babel/preset-env  
- @babel/preset-react  

``` shell
npm install --save-dev babel-loader @babel/preset-env @babel/preset-react
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
  ...
};
```
다시 실행하면 dist 디렉터리에 bundle.js가 성공적으로 생성되었을 것이다.  
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
`index.html`을 열어보면 React Component가 성공적으로 렌더링 된 것을 확인할 수 있다.  

<!-- TODO : [ 그림 ]   -->


## [ Plugin ]
HtmlWebpackPlugin을 이용하면 따로 작성하지 않아도 Webpack에서 알아서 bundle.js를 불러오는 html을 생성해 준다.    

### 설치  
``` shell
npm install --save-dev html-loader
npm install --save-dev html-webpack-plugin
```

### index.html    
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
앞에서와 달리 script를 연결하지 않고 id가 root인 div 태그만 만들었다.  

### webpack.config.js  
``` js
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: 'index.html',
      })
  ],
};

```

- webpack에서 html을 처리하기 위해 html-loader를 추가하였다.  
- `HtmlWebpackPlugin`을 이용하여 변환된 javascript 파일을 index.html에 연결하였다.  

### 실행
``` npx  
npx webpack
```  

실행 결과 dist 디렉터리에 `dist/bundle.js`와 이를 불러오는 `dist/index.html`이 생성된다.  

## [ webpack-dev-server ]  
Front 개발을 진행할 때 수정할 때마다 webpack을 실행시켜 bunlde 해야 한다면 매우 불편할 것이다. `webpack-dev-server`을 사용하면, entry의 수정이 발생할 때마다 변환된 결과를 웹으로 뿌려준다.  

- **webpack-dev-server 설치**  

``` shell
npm install --save-dev webpack-dev-server
```

- **webpack.config.js**  

``` js
module.exports = {
  ...
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
  },
  ...
};
```  

open 옵션을 true로 주면 webpack-dev-server를 실행할 때 자동으로 browser에 띄워준다.  


- **실행**  

```
npx webpack-dev-server
```

### script 작성
매번 `npx webpack-dev-server`를 실행하는 대신 `package.json`의 스크립트에 등록하면 편하게 실행시킬 수 있다.  

- **package.json**  
``` json
    ...
    "scripts": {
      "dev": "webpack-dev-server"
    },
    ...
```  

- **실행**  
``` shell
npm run dev
```  
