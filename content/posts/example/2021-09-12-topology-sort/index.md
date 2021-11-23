---
layout: post
title: "일의 처리 순서를 결정하고 싶다면? 위상 정렬 (Topology Sort)"
excerpt: "위상 정렬에 대해서 알아보자"
tags: [project, network, gnuradio, lora]

path: "/2021-09-12-topology-sort"
featuredImage: "./lora_signal.png"
created: 2021-09-12
updated: 2021-09-12
---

## 위상 정렬 (Topology Sort)  

### DAG (Directed Acylic Graph)  
Cycle이 없는 방향 그래프

## 알고리즘  
알고리즘 설명에 들어가기 전에 `진입 차수`라는 개념을 알아보자. 
집인 차수는 해당 노드로 진입할 수 있는 Edge의 개수이다.  



1. 진입 차수가 0인 노드를 큐에 담는다.  
2. 큐에서 노드를 꺼내 연결된 해당 노드에서 나가는 Edge를 제거한다.  
    * Edge를 제거하면서 진입 차수가 0이된 노드를 큐에 담는다.  
3. 모든 원소를 방문할 때까지 2를 반복한다.  

