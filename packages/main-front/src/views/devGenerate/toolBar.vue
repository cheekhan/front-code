<script setup lang='ts'>
import { ref } from "vue"
import { CanvasConfig } from "./type"
/**
 * set-size : 设置画布尺寸，返回 canvas_size
 */
const emits = defineEmits(['set-size'])
const canvas_size = ref<CanvasConfig>(new CanvasConfig())
const setSize = () => emits('set-size', canvas_size.value)

</script>

<template>
    <div class="tool-container">
        <div>
            <a-button type="primary">预览</a-button>
        </div>
        <div>
            <a-button type="primary">清空</a-button>
        </div>
        <div>
            <a-button type="primary">保存</a-button>
        </div>
        <!-- 画布尺寸 : 宽度-->
        <div class="size-input">
            <a-input-number v-model:value="canvas_size.height" :controls="false" addon-before="高度" addon-after="px">
            </a-input-number>
            <a-input-number v-model:value="canvas_size.width" :controls="false" addon-before="宽度" addon-after="px">
            </a-input-number>
            <a-button type="primary" @click="setSize">设置</a-button>
        </div>
    </div>
</template>
<style lang='less' scoped>
.tool-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    // padding-left: 10px;

    >div {
        margin-right: 10px;
    }
}

.size-input {
    display: flex;
    width: 380px;
    justify-content: space-between;

    >div {
        width: 150px;
    }
}
</style>