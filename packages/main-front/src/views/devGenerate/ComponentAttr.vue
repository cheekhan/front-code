<template>
    <div class="attr-conntainer">
        <div>
            <a-input v-model:value="value" placeholder="Basic usage" />
        </div>
        <div>
            <a-switch v-model:checked="checked" />
        </div>
        <div>
            <a-input v-model:value="value" placeholder="Basic usage" />
        </div>
        <div>
            <a-switch v-model:checked="checked" />
        </div>
        <div>
            <a-input v-model:value="value" placeholder="Basic usage" />
        </div>
        <div>
            <a-switch v-model:checked="checked" />
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { ref } from 'vue';
const value = ref("属性")
const checked = ref(true)
</script>
    
<style lang="less" scoped>
.attr-conntainer {
    width: 0;
    flex-grow: 1;
    padding-left: 10px;

    >div {
        margin-bottom: 10px;

    }
}
</style>