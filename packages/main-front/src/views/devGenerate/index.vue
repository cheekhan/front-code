<script setup lang="ts">
import { CanvasConfig } from "./type";
import { ref } from "vue"
// 导入组件
import ComponentListVue from './ComponentList.vue';
import ComponentContainerVue from './ComponentContainer.vue';
import ComponentAttrVue from './ComponentAttr.vue';
import toolBarVue from "./toolBar.vue";
// 画布配置
const canvaseConfig = ref<CanvasConfig>(new CanvasConfig());
const setCanvasSize = (size: CanvasConfig) => {
    console.log(size)
    console.log(`设置size:${size.width},${size.height}`)
    canvaseConfig.value.width = size.width;
    canvaseConfig.value.height = size.height;
}
</script>

<template>
    <div class="index-container">
        <toolBarVue class="top-bar" @set-size="setCanvasSize" />
        <ComponentListVue></ComponentListVue>
        <ComponentContainerVue :config="canvaseConfig"> </ComponentContainerVue>
        <ComponentAttrVue></ComponentAttrVue>
    </div>
</template>
<style lang='less' scoped>
.index-container {
    display: flex;
    width: 100%;
    height: 100%;
    position: relative;
    box-sizing: border-box;
    padding-top: 50px;
}

.top-bar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px
}
</style>