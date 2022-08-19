<script lang="ts" setup>
import {ref} from "vue"
import xkCropper from "../components/wzkCropper/index.vue"

const testImgUrl = ref<string>()

function handleCrop(blob: Blob) {
  console.log('获取到blob,转为base64,添加到图片上')
  testImgUrl.value = window.URL.createObjectURL(blob)
}


</script>

<template>
  <xkCropper @crop="handleCrop"></xkCropper>
  <img style="height: 200px;" :src="testImgUrl" alt="">

</template>

<style lang="less" scoped>

</style>