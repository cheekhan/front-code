<script lang='ts' setup>
import {inject} from "vue"

const squareUrl = 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'

const uname = inject('uname')

</script>

<template>
  <div class="top-bar-container">
    <el-dropdown trigger="click">
    <span class="top-bar-user-name">
      {{ uname }}
      <el-icon>
        <arrow-down/>
      </el-icon>
    </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <el-avatar :size="30" :src="squareUrl"/>
  </div>


</template>

<style lang='less' scoped>
.top-bar-container {
  height: 50px;
  margin: 5px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.top-bar-user-name {
  margin-right: 10px;
  color: #606266;
  font-weight: 600;
  cursor: pointer;
}


</style>