<script lang="ts" setup>
import {ref} from "vue"
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";
import getFileToBase64 from "./getFileToBase64";
import uploadImg from "./uploadImg";

// props
interface propsType {
  uploadUrl?: string
}

const props = defineProps<propsType>()

//emits
interface emitType {
  (e: 'crop', blob: Blob): void,

  (e: "upload-err", msg: any): void
}

const emits = defineEmits<emitType>()
//定义组件使用数据
// 组件刷新key
const selfKey = ref<number>(1);
// 读取图片
const sourceBase64 = ref<string>("");
// 画布实例
const cropper = ref<Cropper>()
// 画布参数
const CropperOptions: Cropper.Options = {
  viewMode: 1,
  dragMode: "move",
  guides: false,
  background: false,
  autoCrop: true,
  ready(event: Cropper.ReadyEvent<EventTarget>) {
    cropper.value?.setAspectRatio(1)
  }
}
// 上传时，画布的loading
const imgUploading = ref<boolean>(false)

// 退出编辑模式
function exit() {
  selfKey.value += 1;
  sourceBase64.value = '';
}


function handleClickGetFile() {
  getFileToBase64().then((base64: string) => {
    sourceBase64.value = base64
  })
}


// 图片加载完成，绘制画布
function draw() {
  const img = document.getElementById('xk-cropper-img-box') as HTMLImageElement;
  cropper.value = new Cropper(img, CropperOptions)
}

//画布操作函数
function crop() {
  const cropCanvas = cropper.value?.getCroppedCanvas();

  cropCanvas?.toBlob((blob) => {
    if (!blob) return
    if (props.uploadUrl) { // 需要上传图片
      imgUploading.value = true;
      uploadImg(blob, props.uploadUrl)
          .then((r: Response) => {
            console.log(r);
            emits('crop', blob);
            exit();
          })
          .catch(e => {
            emits('upload-err', e)
          })
          .finally(() => {
            imgUploading.value = false;
          });
    } else { // 直接将图片返回调用方
      emits('crop', blob);
      exit();
    }
  });
}

// 放大背景图
function zoomIn() {
  cropper.value?.zoom(0.1)
}

// 缩小背景图
function zommOut() {
  cropper.value?.zoom(-0.1)
}

// 旋转背景图
function rotate() {
  cropper.value?.rotate(90)
}

// 清空所有修改
function reset() {
  cropper.value?.reset()
}


</script>

<template>
  <div class='xk-cropper-container' :key='selfKey'>
    <!-- 选择图片 -->
    <slot name='open'>
      <div class='open-file-btn' @click='handleClickGetFile'>选择本地图片</div>
    </slot>
    <div class='full-screen-box' v-if='sourceBase64'>
      <!-- 主要区域：最大尺寸为900 -->
      <div class='main-body'>
        <div class='btns'>
          <span class='iconfont icon-xk-check' title='保存' @click='crop'></span>
          <span class='iconfont icon-xk-icon' title='取消' @click='exit'></span>
        </div>
        <div style='width:100%;height:100%'>
          <img id='xk-cropper-img-box' :src='sourceBase64' alt='' @load='draw'>
        </div>
        <div class='tools'>
          <div>
            <span title='缩小' class='iconfont icon-xk-suoxiao' @click='zommOut'></span>
            <span title='放大' class='iconfont icon-xk-kuoda' @click='zoomIn'></span>
            <span title='旋转' class='iconfont icon-xk-xuanzhuan' @click='rotate'></span>
            <span title='重置' class='iconfont icon-xk-lajitongshanchu' @click='reset'></span>
          </div>
        </div>
        <!-- loading -->
        <div v-if='imgUploading' class='loading'>
          <div class='sk-chase'>
            <div class='sk-chase-dot'></div>
            <div class='sk-chase-dot'></div>
            <div class='sk-chase-dot'></div>
            <div class='sk-chase-dot'></div>
            <div class='sk-chase-dot'></div>
            <div class='sk-chase-dot'></div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="less" scoped>
@import "index.css";

// 重置内部样式
:deep(.cropper-modal) {
  background-color: #333;
}

.xk-cropper-container {
  display: inline-block;
}

.open-file-btn {
  display: inline-block;
  background-color: #2f90ff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  // position: relative;
}

.full-screen-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #333333;
  // margin: 10vh 5vw;
  box-sizing: border-box;
  z-index: 1000;
}

.main-body {
  width: 100%;
  height: 100%;
  padding: 15vh 0;
  box-sizing: border-box;
  margin: auto;
  position: relative;

  .btns {
    position: absolute;
    top: 10px;
    right: 0;
    z-index: 100;

    span {
      color: #fff;
      margin-right: 10px;
      padding: 10px;
      cursor: pointer;
      font-size: 18px;
    }

    span:active {
      background-color: #2f90ff;
    }
  }

  .tools {

    position: absolute;
    bottom: 60px;
    width: 100%;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      color: #fff;
      background-color: rgba(0, 0, 0, .5);
      // margin-right: 20px;
      cursor: pointer;
      padding: 9px 15px;
      cursor: pointer;
    }

    span:active {
      background-color: #2f90ff;
    }
  }
}

#xk-cropper-img-box {
  display: block;
  max-width: 100%;
}

// 加载动画 --- start
.loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #2c3e50;
  background-color: #333333c7;
  z-index: 101;
}

.sk-chase {
  width: 40px;
  height: 40px;
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
}

.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  animation: sk-chase-dot 2.0s infinite ease-in-out both;
}

.sk-chase-dot:before {
  content: '';
  display: block;
  width: 25%;
  height: 25%;
  background-color: #fff;
  border-radius: 100%;
  animation: sk-chase-dot-before 2.0s infinite ease-in-out both;
}

.sk-chase-dot:nth-child(1) {
  animation-delay: -1.1s;
}

.sk-chase-dot:nth-child(2) {
  animation-delay: -1.0s;
}

.sk-chase-dot:nth-child(3) {
  animation-delay: -0.9s;
}

.sk-chase-dot:nth-child(4) {
  animation-delay: -0.8s;
}

.sk-chase-dot:nth-child(5) {
  animation-delay: -0.7s;
}

.sk-chase-dot:nth-child(6) {
  animation-delay: -0.6s;
}

.sk-chase-dot:nth-child(1):before {
  animation-delay: -1.1s;
}

.sk-chase-dot:nth-child(2):before {
  animation-delay: -1.0s;
}

.sk-chase-dot:nth-child(3):before {
  animation-delay: -0.9s;
}

.sk-chase-dot:nth-child(4):before {
  animation-delay: -0.8s;
}

.sk-chase-dot:nth-child(5):before {
  animation-delay: -0.7s;
}

.sk-chase-dot:nth-child(6):before {
  animation-delay: -0.6s;
}

@keyframes sk-chase {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-chase-dot {

  80%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4);
  }

  100%,
  0% {
    transform: scale(1.0);
  }
}

// 加载动画 --- end

</style>

<style>
::-webkit-scrollbar {
  display: none;
  scrollbar-width: none;
}
</style>