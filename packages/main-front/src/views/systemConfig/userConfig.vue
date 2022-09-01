<script lang="ts" setup>
import {} from "vue"
import defaultImg01 from "../../assets/sysConfig/m-01.png";
import userStore from "../../store/userStore"

const store = userStore()


</script>

<template>
  <div class="sys-config-user-contianer">
    <el-image style="width: 100px; height: 100px" :src="defaultImg01" fit="fit"/>
    <p>{{ store.name }}</p>
    <button @click="store.name='用户01'">点击</button>
  </div>

</template>

<style lang="less" scoped>
.sys-config-user-contianer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>