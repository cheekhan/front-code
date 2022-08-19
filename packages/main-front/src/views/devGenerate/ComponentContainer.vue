<template>
  <div class='pattern-grid-md'
       style='border:1px solid #f5900c;position:relative;color:#dee5eb;'
       :style='{ width: `${config.width}px`, height: `${config.height}px` }' @drop='handleDrop' @dragover='handleOver'>
    <component v-for='item  of components' :is='item.component' :key='item.index'></component>
  </div>
</template>

<script setup lang='ts'>
import { CanvasConfig, ComponentData } from './type';
import { componentList } from '../../common/components';
import { ref } from 'vue';

interface propsData {
  config: CanvasConfig;
}

const props = defineProps<propsData>();

// 有拖拽元素进入
function handleOver(e: DragEvent) {
  e.preventDefault();
  e.dataTransfer!.dropEffect = 'copy';
}

let componentIndex = 0;

// 放置拖拽元素
function handleDrop(e: DragEvent) {
  e.preventDefault();
  console.log(e);
  const componentName = e.dataTransfer?.getData('name');
  componentList.forEach(c => {
    if (c.name === componentName) {
      components.value.push({
        ...c,
        index: (componentIndex++),
      });
    }
  });

}

// 需要展示的组件列表
const components = ref<ComponentData[]>([]);
</script>

<style>
</style>