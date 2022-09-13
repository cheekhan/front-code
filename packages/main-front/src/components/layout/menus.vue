<script lang='ts' setup>

import {ref} from 'vue';
import sideIn from './static/side-in.svg';
import sideOut from './static/side-out.svg';
import logo from '../../assets/logo.svg';
// 导入所有icon
import {AuthCtrlIcon, SystemCtrlIcon, ExampleIcon, DemoIcon} from "../myIcons/index"


const sideMode = ref(true); // true 是展开

// 处理侧边栏收起和打开
function changeMenuMode() {
  sideMode.value = !sideMode.value;
}

</script>

<template>
  <div
      :style='{width:sideMode?"200px":"64px"}'
      class="layout-menu-container">
    <!--    搜logo-->
    <div class='top-logo'>
      <img :src='logo' alt=''>
      <p v-if='sideMode'>Console控制台</p>
    </div>

    <!--    菜单列表-->
    <el-menu
        class='el-menu-style'
        :collapse='!sideMode'
        default-active='1'
        :router='true'
        unique-opened
    >
      <!--      权限控制-->
      <el-sub-menu index='1'>
        <template #title>
          <AuthCtrlIcon></AuthCtrlIcon>
          <span>权限控制</span>
        </template>
        <el-menu-item index='/auth/dept'>
          <template #title>
            <DemoIcon></DemoIcon>
            <span>组织管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index='/auth/user'>
          <template #title>
            <DemoIcon></DemoIcon>
            <span>人员管理</span>
          </template>
        </el-menu-item>
        <el-menu-item index='/auth/role'>
          <template #title>
            <DemoIcon></DemoIcon>
            <span>角色管理</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
      <!--      系统控制-->
      <el-sub-menu index='2'>
        <template #title>
          <SystemCtrlIcon></SystemCtrlIcon>
          <span>系统控制</span>
        </template>
        <el-menu-item index='/system/dict'>字典管理</el-menu-item>
        <el-menu-item index='/system/log'>日志管理</el-menu-item>
        <el-menu-item index='/system/menu'>菜单管理</el-menu-item>
      </el-sub-menu>
      <!--      组件示例-->
      <el-sub-menu index='3'>
        <template #title>
          <ExampleIcon></ExampleIcon>
          <span>开放组件</span>
        </template>
        <el-menu-item index='/example/cropper'>
          <template #title>
            <DemoIcon></DemoIcon>
            <span>图片裁剪</span>
          </template>
        </el-menu-item>
        <el-menu-item index='/example/uploadRef'>
          <template #title>
            <DemoIcon></DemoIcon>
            <span>手动上传</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
    <!--    伸缩条-->
    <div class='bottom-bar' @click='changeMenuMode'>
      <img :src='sideMode?sideIn:sideOut'>
    </div>
  </div>

</template>

<style lang='less' scoped>
.layout-menu-container {
  background-color: #313743;
  transition: all 400ms;
  position: relative;
  user-select: none;
  overflow: hidden;
  padding: 60px 0 30px 0;
}

// 顶部logo
.top-logo {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Georgia, serif;
  //border-bottom: 1px solid #EBEEF5;
  color: #fff;

  img {
    padding: 0 10px 0 15px;
    width: 36px;
    height: 36px;
  }
}

//伸缩条
.bottom-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: calc(100% - 20px);
  //height: 30px;
  margin: 10px;
  padding: 4px;
  box-sizing: border-box;
  border-radius: 5px;
  background-color: var(--main-color);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
}

// 覆盖原主题
.el-menu-style {
  z-index: 1;
  --el-menu-border-color: #313743;
  //选中文字颜色
  --el-menu-active-color: #409Eff;
  //  背景颜色
  --el-menu-bg-color: #313743;
  //  默认文字颜色
  --el-menu-text-color: #fff;
  //  hover时背景色
  --el-menu-hover-bg-color: #0f2034;
}

:deep(.el-menu-item.is-active) {
  background-color: #0f2034;
  border-right: 1px solid #000;
}

</style>