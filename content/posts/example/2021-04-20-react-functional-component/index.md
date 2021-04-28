---
layout: post
title: "[React] React Life Cycle과 함수형 컴포넌트"
excerpt: "React Hook을 사용해보자"
tags: [web, react]

path: "/2021-04-20-react-functional-component"
featuredImage: "./styled-compoent-material-ui.JPG"
created: 2021-04-20
updated: 2021-04-20
---

## React 함수형 컴포넌트
React에서 컴포넌트를 생성할 때는 클래스형 컴포넌트와 함수형 컴포넌트를 이용할 수 있다. 클래스형 컴포넌트에서는 Life Cycle 메서드를 제공하여 컴포넌트가 생성되고 소멸하기까지 각 시점에 필요한 동작을 수행해줄 수 있다. 
함수형 컴포넌트는 이런 Life Cycle을 제공하지 않는 대신 렌더링?(마운팅?) 속도가 빠르다는 이점이 있다. 함수형 컴포넌트에서도 React Hook을 사용하여 Life Cycle을 관리할 수 있다고 한다. 
함수형 컴포넌트를 사용하여 속도를 향상시키면서, React Hook으로 필요한 경우에 Life Cycle을 관리해보자.  

## React Life Cycle  
React-hook을 살펴보기 전에 우리가 사용하려고 하는 React Life Cycle에 대해서 먼저 알아보자.

* 