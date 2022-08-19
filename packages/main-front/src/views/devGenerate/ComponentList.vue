<template>
    <div style="width:0;flex-grow: 1;padding-right: 5px;box-sizing: border-box;">
        <div :draggable="true" class="item" v-for="component of componentList" :key="component.name"
            @dragstart="handleDragStart($event, component)">
            <!-- {{ component.label }} -->
            <!-- <component.dragImage></component.dragImage> -->
            <component style="width:100%;border-radius: 3px;" :is="component.dragImage"></component>
        </div>
    </div>

</template>
    
<script setup lang='ts'>
import { ComponentData } from "./type"
import { componentList } from "../../common/components";

function handleDragStart(e: DragEvent, component: ComponentData) {
    if (e.dataTransfer) {
        e.dataTransfer.dropEffect = "copy"
        e.dataTransfer.setData("name", component.name)
    } else {
        console.log("event has no data transfer.")
    }
}

// 返回函数组件


</script>
    
<style lang="less">
@import "../../style/var.less";

.item {
    margin-top: 10px;
    background-color: @underton;
    text-align: center;
    // font-size: 18px;
    // font-weight: 700;
    // padding: 10px;
    cursor: pointer;
    user-select: none;
    border: 1px solid @underton;
    transition: all 400ms;
    border-right: 5px solid @underton;
}

.item:hover {
    box-shadow: -2px 2px 5px 0px #bfc3c9;
}
</style>