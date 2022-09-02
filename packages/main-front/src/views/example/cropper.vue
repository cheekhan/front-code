<script lang="ts" setup>

import {ref} from "vue"
// import {wzkImgCut} from "@wzk/design"
import {wzkImgCut} from "@cheekhan/design"

const imgUrl = ref("")

function handleCrop(blob: Blob) {
  imgUrl.value = window.URL.createObjectURL(blob)
}

const imgUrl2 = ref("")

function handleCrop2(blob: Blob) {
  imgUrl.value = window.URL.createObjectURL(blob)
}

</script>

<template>
  <h3>全屏模式</h3>
  <!--  uploadUrl="/uploads"-->
  <wzkImgCut @crop="handleCrop"></wzkImgCut>
  <div>
    <img :src="imgUrl" alt="" style="height: 200px;">
  </div>
  <h3>模态框模式</h3>
  <div class="embed-cut">
    <wzkImgCut @crop="handleCrop2" embed></wzkImgCut>
  </div>

  <div>
    <img :src="imgUrl2" alt="" style="height: 200px;">
  </div>
</template>

<style lang="less" scoped>
// 嵌入式的裁剪区域
.embed-cut {
  width: 480px;
  height: 270px;
}
</style>