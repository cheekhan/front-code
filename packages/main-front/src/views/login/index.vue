<script lang="ts" setup>

import {ref} from "vue"
import bgImg from "../../assets/bg.png"
import FormItem from "./formItem.vue"
import imgList from "./imgList";

const containerStyle = {
  backgroundImage: `url(${bgImg})`
}

const loading = ref(false); // 加载中
const loginForm = ref({
  uname: "",
  upwd: "",
})

function handleLogin() {
  // loading.value = true;
}

</script>

<template>
  <div class="login-container" :style="containerStyle">
    <div class="login-box">
      <div class="banner-container">
        <el-carousel :interval="4000" type="card" height="450px" arrow="never">
          <el-carousel-item v-for="(item,index) in imgList" :key="index">
            <div style="display: flex;width:100%;height:100%;justify-content: center">
              <img style="width:100%;" :src="item" alt="">
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="form-container" v-loading="loading">
        <p class="form-title">Hello ! 欢迎登陆</p>
        <!--        用户名：-->
        <FormItem style="margin-bottom:10px" title="用户名" placeholder="请输入用户名"></FormItem>
        <!--        密码：-->
        <FormItem style="margin-bottom:10px" title="用户名" placeholder="请输入用户名"></FormItem>
        <!--        验证码：-->
        <FormItem style="margin-bottom:10px" title="用户名" placeholder="请输入用户名" err="">
          <p>验证码</p>
        </FormItem>
        <!--        登陆按钮-->
        <div class="login-btn" @click="handleLogin">
          <span>登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-width: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-box {
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
  height: 500px;
  display: flex;
  position: relative;
  justify-content: center;
}

.banner-container {
  //width: 440px;
  width: 0;
  flex-grow: 1;
  max-width: 650px;
}

.form-container {
  width: 370px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  margin-left: 10px;
  padding: 15px;

  .form-title {
    text-align: center;
    font-size: 26px;
    font-weight: bold;
    color: #303133;
    margin-bottom: 30px;
  }
}

// 自定义登录

.login-btn {
  //margin: auto;
  margin: 50px auto 0;
  width: 60%;
  text-align: center;
  user-select: none;
  background-color: #dff8ff;
  color: #303133;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 99rem;
  border-width: 2px;
  overflow: hidden;
  padding: 0.8rem 3rem;
  position: relative;
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  background-image: none;
  -webkit-mask-image: -webkit-radial-gradient(#000, #303133);
  text-transform: uppercase;
}

.login-btn:hover {
  color: #fff;
}

.login-btn,
.login-btn *,
.login-btn :after,
.login-btn :before,
.login-btn:after,
.login-btn:before {
  border: 0 solid;
  box-sizing: border-box;
}

.login-btn:disabled {
  cursor: default;
}

//
.login-btn:-moz-focusring {
  outline: auto;
}

//
.login-btn svg {
  display: block;
  vertical-align: middle;
}

//
.login-btn [hidden] {
  display: none;
}

// 设置混色
.login-btn span {
  //mix-blend-mode: difference;
  mix-blend-mode: hard-light;
}

//
.login-btn:after,
.login-btn:before {
  background: linear-gradient(90deg,
  #303133 25%,
  transparent 0,
  transparent 50%,
  #303133 0,
  #303133 75%,
  transparent 0);
  content: "";
  inset: 0;
  position: absolute;
  transform: translateY(var(--progress, 100%));
  transition: transform 0.2s ease;
}

//
.login-btn:after {
  --progress: -100%;
  background: linear-gradient(90deg,
  transparent 0,
  transparent 25%,
  #303133 0,
  #303133 50%,
  transparent 0,
  transparent 75%,
  #303133 0);
  z-index: -1;
}

.login-btn:hover:after,
.login-btn:hover:before {
  --progress: 0;
}
</style>