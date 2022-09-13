<script lang="ts" setup>

import {} from "vue"
import NoDateImg from "../assets/no-auth.png"

</script>

<template>

  <div class="handle-err-container">
    <div>
      <img :src="NoDateImg" alt="没有访问权限">
      <p>没有访问权限，请联系管理员</p>
    </div>
  </div>

</template>

<style lang="less" scoped>
.handle-err-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 400px;
}

p {
  text-align: center;
  font-size: 16px;
  font-weight: bolder;
  color: gray;
}

</style>