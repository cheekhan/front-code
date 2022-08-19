<script lang="ts" setup>

import {ref} from "vue"
import {wzkCropper} from "@wzk/design"

const imgUrl = ref("")

function handleCrop(blob: Blob) {
  imgUrl.value = window.URL.createObjectURL(blob)
}

</script>

<template>
  <wzkCropper @crop="handleCrop"></wzkCropper>
  <div>
    <img :src="imgUrl" alt="" style="height: 200px;">
  </div>
</template>

<style lang="less" scoped>

</style>