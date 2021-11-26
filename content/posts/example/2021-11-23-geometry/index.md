---
layout: post
title: "계산기하학 부호면적(Signed Area)"
excerpt: ""
tags: [algorithm]

path: "/2021-11-23-geometry"
featuredImage: "./image.png"
created: 2021-11-23
updated: 2021-11-23
---

## \[ 계산기하학이란? \]  


## \[ Signed Area \]  
모든 선분에서는 부호면적(Signed Area)를 구할 수 있다. 
이는 선분의 양끝점에서 x축에 수직으로 ~~를 내렸을 때 생기는 도형의 면적이다. 
이 면적은 선분의 방향 (A->B or B->A)에 따라서 부호가 달라질 수 있다.
면적을 구하는 방법은 다음과 같다.   

~~수식
``` cpp
code
```

## \[ 부호면적을 이용한 삼각형 면적 구하기 \]  

~~수식
``` cpp
code
```

## \[ 외적을] 이용한 삼각형 면적 구하기 \]  

## \[ Linear Segment Intersection \]  
두 선분이 만나는지 확인하고 싶을 때도 Signed Area를 사용할 수 있다.  

`signedArea(x,y,p)*signedArea(x,y,q) < 0` 라면
- x-y라는 선분을 기준으로 p와 q가 반대 방향에 있다는 것이다.

그리고 p-q 선분을 가지고 x, y를 또 판단해보면 두 선분이 만나는지 알 수 있다.

(signed area pqx)*(signed area pqy) < 0 ?