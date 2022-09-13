<script lang="ts" setup>
import {ref, PropType} from "vue"

interface propsType {
  title: string,
  placeholder?: string,
  err?: string,
  flex?: number,
}

const props = withDefaults(defineProps<propsType>(), {
  title: "",
  placeholder: '',
  err: "",
  flex: 10
});
const inputValue = ref<string>('')


</script>

<template>
  <div>
    <p class="input-title">{{ title }}</p>
    <div class="form-item-container">
      <el-input style="flex-grow: 10;width:0;margin-right:10px;" v-model="inputValue" :placeholder="placeholder"/>
      <div class="flex-right" :style="{flexGrow:flex}" v-show="$slots.default">
        <slot></slot>
      </div>
    </div>
    <span class="input-err-msg">{{ err }}</span>
  </div>
</template>

<style lang="less" scoped>
.form-item-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.input-title {
  font-size: 14px;
  color: #606266;
  margin-bottom: 5px;
  margin-left: 2px;
}

.input-err-msg {
  display: inline-block;
  color: red;
  font-size: 12px;
  margin-left: 2px;
}

.flex-right {
  width: 0;
}

</style>