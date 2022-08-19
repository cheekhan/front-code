/**
 * 组件生成相关的类型定义
 */

import { Component, DefineComponent } from "vue"

// 描述组件信息的结构
// 
export interface ComponentData {
    name: string
    label: string
    // 组件的拖动效果图，200*50
    // x 和 y 是偏移量
    dragImage: DefineComponent
    imgX: number
    imgY: number
    component: Component
    index?: number // 在容器中展示的序号
}


// 画布配置
export class CanvasConfig {
    width: number
    height: number
    constructor() {
        this.height = 700;
        this.width = 900
    }
}