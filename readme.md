# 一、monorepo 架构下的子工程模块

> 工程基于pnpm构建：https://pnpm.io/zh/motivation

### 1. main-front

基于vue3+vite创建的前端工程，
是项目的主工程目录。
在主工程中，可以引用其他的子工程，作为复用的模块。

### 2. wzk-api 工程

基于axios + fetch 封装的请求库

### 3. wzk-design 工程

封装的公共组件库，当前支持

- 图片裁剪组件
- 