<template>
  <div class="cheekhan-cropper-container" :class='embedStyle' :key='selfKey'>
    <!-- 选择图片 -->
    <slot name='open'>
      <div class="slot-open">
        <div class='open-file-btn' @click='handleClickGetFile'>选择本地图片</div>
      </div>
    </slot>
    <Teleport to="body" :disabled="embed">
      <div class='full-screen-box' v-if='sourceBase64'>
        <!-- 主要区域：最大尺寸为900 -->
        <div class='main-body'>
          <div class='btns'>
            <span class='iconfont icon-xk-check' title='保存' @click='handleCrop'></span>
            <span class='iconfont icon-xk-icon' title='取消' @click='exit'></span>
          </div>
          <div style='width:100%;height:100%'>
            <img :id='containerId' class="xk-cropper-img-box" :src='sourceBase64' alt='' @load='handleImgLoad'>
          </div>
          <div class='tools'>
            <div>
              <span title='缩小' class='iconfont icon-xk-suoxiao' @click='handleZoomOut'></span>
              <span title='放大' class='iconfont icon-xk-kuoda' @click='handleZoomIn'></span>
              <span title='旋转' class='iconfont icon-xk-xuanzhuan' @click='handleRotate'></span>
              <span title='重置' class='iconfont icon-xk-lajitongshanchu' @click='handleReset'></span>
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
    </Teleport>
  </div>

</template>

<script lang="ts" setup>
import {defineEmits, defineProps, computed, onMounted} from "vue"
import index from "./index"
import createCropper from "./createCropper";
import "cropperjs/dist/cropper.css";
import "pattern.css"

interface propsType {
  uploadUrl?: string,
  embed?: boolean
}

interface emitsType {
  (e: 'crop', blob: Blob): void,

  (e: "upload-err", msg: any): void
}

const props = defineProps<propsType>();
const emits = defineEmits<emitsType>();
// 导入主逻辑
const {selfKey, sourceBase64, exit, handleClickGetFile, containerId} = index(props);
// 导入剪切功能
const {cropper, imgUploading, draw, crop, zoomIn, zoomOut, rotate, reset} = createCropper(props);

// 计算嵌入式的样式
const embedStyle = computed(() => {
  return props.embed ? ['embed', 'pattern-dots-sm'] : []
})

// 图片加载完成
function handleImgLoad() {
  draw(containerId.value)
}

// 分别处理：缩小，放大，旋转，重置
function handleZoomOut() {
  zoomOut()
}

function handleZoomIn() {
  zoomIn()
}

function handleRotate() {
  rotate()
}

function handleReset() {
  reset()
}

//保存
function handleCrop() {
  crop().then(blob => {
    emits('crop', blob)
    exit()
  }).catch(e => {
    emits('upload-err', e)
  })
}

// 处理导出的内容
defineExpose({exit})

</script>

<style lang="less" scoped>
@import "index.css";

// 重置内部样式
:deep(.cropper-modal) {
  background-color: #333;
}

.cheekhan-cropper-container {
  display: inline-block;
  position: relative;
}

// 如果是嵌入式时，需要填充满整个区域
.embed {
  width: 100%;
  height: 100%;
}

.slot-open {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  position: absolute;
  top: 0;
  left: 0;
  //width: 100vw;
  //height: 100vh;
  width: 100%;
  height: 100%;
  background-color: #333333;
  // margin: 10vh 5vw;
  box-sizing: border-box;
  z-index: 1000;
}

.main-body {
  width: 100%;
  height: 100%;
  //padding: 15vh 0;
  padding: 30px;
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

.xk-cropper-img-box {
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