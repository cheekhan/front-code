<script lang="ts" setup>
import reset from "./index"

const {images, showDialog, isBreak, getImages} = reset()
</script>

<template>
  <!--  <button class="upload-btn" @click="getImages">手动上传</button>-->
  <el-button type="primary" @click="getImages">Primary</el-button>
  <teleport to="body" v-if="showDialog">
    <div class="xk-upload-ref-container">
      <!--    非标准容器：进行提示-->
      <template v-if="isBreak">
        <div class="xk-upload-err">
          <p>请在标准容器中打开</p>
          <div class="xk-dialog-foot">
            <p class="xk-btn" @click="showDialog=false">知道了</p>
          </div>
        </div>
      </template>
      <!--    标准容器-->
      <template v-else>
        <div class="xk-upload-list">
          <div class="xk-upload-item" v-for="(item,index) in images" :key="index">
            <img :src="item.src" alt="">
            <p>{{ item.name }}，</p>
            <p>文件大小{{ item.size }}</p>
            <div class="spinner">
              <div class="rect1"></div>
              <div class="rect2"></div>
              <div class="rect3"></div>
              <div class="rect4"></div>
              <div class="rect5"></div>
            </div>
          </div>
          <div class="xk-dialog-foot">
            <p class="xk-btn" @click="showDialog=false">关闭</p>
          </div>
        </div>
      </template>
    </div>

  </teleport>
</template>

<style lang="less" scoped>
.upload-btn {
  background-color: #409EFF;
  color: #ffffff;
  padding: 5px 10px;
  border-width: 0;
  border-radius: 3px;
  cursor: pointer;
}

.upload-btn:active {
  opacity: 0.7;
}

.xk-upload-ref-container {
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}

.xk-upload-err {
  color: #303133;
  font-size: 16px;
  font-weight: bold;
  background-color: #fff;
  border-radius: 5px;
  padding: 35px 40px 25px;
}

// 文件列表
.xk-upload-list {
  color: #303133;
  background-color: #fff;
  border-radius: 5px;
  padding: 15px 10px;
}

//单个图片文件的显示
.xk-upload-item {
  display: flex;
  justify-content: center;

  img {
    height: 20px;
    margin-right: 10px;
  }

  p {
    font-size: 14px;
    color: #606266;
  }

  span {
    font-size: 14px;
    color: red;
  }

}


.xk-dialog-foot {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

//普通按钮
.xk-btn {
  background-color: #ffffff;
  color: #606266;
  padding: 5px 15px;
  border: 1px solid #dcdfe6;
  border-radius: 3px;
  cursor: pointer;
  outline-width: 0;
  font-weight: normal;
  font-size: 14px;
  user-select: none;
}

.xk-btn:active {
  color: #409eff;
  border-color: #409eff;
  background-color: #ecf5ff;
}

//主要按钮
.xk-btn-primry {
  background-color: #409EFF;
  color: #ffffff;
  padding: 5px 10px;
  border-width: 0;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
}

.xk-btn-primry:active {
  opacity: 0.7;
}

// loading
.spinner {
  //margin: 100px auto;
  width: 50px;
  height: 15px;
  text-align: center;
  font-size: 10px;
}

.spinner > div {
  background-color: #67C23A;
  height: 100%;
  width: 4px;
  display: inline-block;

  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes sk-stretchdelay {
  0%, 40%, 100% {
    -webkit-transform: scaleY(0.4)
  }
  20% {
    -webkit-transform: scaleY(1.0)
  }
}

@keyframes sk-stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}

</style>