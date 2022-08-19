<script lang='ts' setup>

import {ref} from 'vue';
import sideIn from './static/side-in.svg';
import sideOut from './static/side-out.svg';
import logo from '../../assets/logo.svg';


const sideMode = ref(true); // true 是展开

// 处理侧边栏收起和打开
function changeMenuMode() {
  sideMode.value = !sideMode.value;
}


</script>


<template>
  <div
      :style='{width:sideMode?"200px":"64px"}'
      style='transition: all 400ms;position: relative;user-select: none;overflow: hidden'>
    <!--    搜logo-->
    <div class='top-logo'>
      <img :src='logo' alt=''>
      <p v-if='sideMode'>Console控制台</p>
    </div>

    <!--    菜单列表-->
    <el-menu class='el-menu-style' :collapse='!sideMode' default-active='1' :router='true'>
      <!--      素材管理-->
      <el-sub-menu index='1'>
        <template #title>
          <el-icon>
            <svg t="1660632453492" class="icon" viewBox="0 0 1280 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="20040" width="32" height="32">
              <path
                  d="M1213.44 318.08H59.2c-58.56 0-61.504 28.544-58.368 63.424l52.48 573.184c3.2 34.88 11.52 63.36 70.016 63.36h1025.92c59.712 0 66.816-28.48 69.952-63.36l52.48-573.184c3.2-34.88 0.32-63.36-58.24-63.36z m-42.368-139.904c-7.04-28.032-41.664-50.944-76.928-50.944H660.48c-35.264 0-84.608-20.16-109.568-44.864L513.088 44.928C488.128 20.224 438.848 0 403.52 0H196.352c-35.2 0-67.328 28.48-71.168 63.232l-18.56 165.824h1077.248l-12.8-50.88z"
                  p-id="20041" fill="#117c93"></path>
            </svg>
          </el-icon>
          <span>素材管理</span>
        </template>
        <el-menu-item index='/material/articleList'>图文素材</el-menu-item>
        <el-menu-item index='1-2'>问卷素材</el-menu-item>
        <el-menu-item index='1-3'>标签管理</el-menu-item>
        <el-menu-item index='1-3'>绑定管理</el-menu-item>
      </el-sub-menu>
      <!--      开发管理-->
      <el-sub-menu index='2'>
        <template #title>
          <el-icon>
            <svg t="1660632413765" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="18867" width="32" height="32">
              <path
                  d="M287.744 27.648H119.808c-31.744 0-62.464 12.288-84.992 35.84C12.288 84.992 0 115.712 0 147.456V317.44c0 66.56 53.248 120.832 119.808 120.832h167.936c31.744 0 62.464-12.288 84.992-35.84 22.528-22.528 35.84-53.248 35.84-84.992V147.456c0-31.744-12.288-62.464-35.84-84.992-21.504-22.528-52.224-34.816-84.992-34.816z m315.392 122.88h360.448c32.768 0 59.392-27.648 59.392-60.416 0-16.384-6.144-31.744-17.408-43.008s-26.624-17.408-41.984-17.408H603.136c-21.504 0-41.984 11.264-52.224 29.696-11.264 18.432-11.264 41.984 0 60.416 11.264 19.456 30.72 30.72 52.224 30.72z m360.448 120.832H603.136c-33.792 0-60.416 26.624-60.416 60.416 0 33.792 26.624 60.416 60.416 60.416h360.448c33.792 0 60.416-26.624 60.416-60.416 0-33.792-26.624-60.416-60.416-60.416z m0 603.136H603.136c-21.504 0-41.984 11.264-52.224 29.696-11.264 18.432-11.264 41.984 0 60.416 11.264 18.432 30.72 29.696 52.224 29.696h360.448c33.792 0 60.416-26.624 60.416-60.416 0-32.768-26.624-59.392-60.416-59.392z m0-241.664H603.136c-21.504 0-41.984 11.264-52.224 29.696-11.264 18.432-11.264 41.984 0 60.416 11.264 18.432 30.72 29.696 52.224 29.696h360.448c33.792 0 60.416-26.624 60.416-60.416 0-32.768-26.624-59.392-60.416-59.392z m-675.84-46.08H119.808C53.248 586.752 0 641.024 0 707.584v168.96c0 31.744 12.288 62.464 34.816 84.992 22.528 22.528 53.248 34.816 84.992 34.816h167.936c31.744 0 62.464-12.288 84.992-35.84 22.528-22.528 35.84-53.248 35.84-84.992V707.584c0-31.744-12.288-62.464-35.84-84.992-21.504-22.528-52.224-35.84-84.992-35.84z m0 0"
                  p-id="18868" fill="#117c93"></path>
            </svg>
          </el-icon>
          <span>开发管理</span>
        </template>
        <el-menu-item index='2-1'>item two</el-menu-item>
        <el-menu-item index='2-2'>item two</el-menu-item>
        <el-menu-item index='2-3'>item two</el-menu-item>
      </el-sub-menu>
      <!--      组件示例-->
      <el-sub-menu index='3'>
        <template #title>
          <el-icon>
            <svg t="1660631968275" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="16865" width="32" height="32">
              <path
                  d="M369.152 34.484706A15.058824 15.058824 0 0 1 389.571765 28.310588a329.487059 329.487059 0 0 1 66.590117 47.405177c31.623529 29.033412 50.748235 56.801882 69.571765 98.785882a15.058824 15.058824 0 0 1-27.467294 12.348235c-17.257412-38.430118-34.032941-62.855529-62.464-88.937411a299.369412 299.369412 0 0 0-60.536471-43.068236 15.058824 15.058824 0 0 1-6.113882-20.389647zM472.335059 990.388706a15.058824 15.058824 0 0 1-0.542118-21.293177c16.052706-16.865882 22.106353-28.129882 24.244706-41.953882l0.542118-4.186353c0.391529-3.614118 0.602353-7.890824 0.963764-15.751529a15.058824 15.058824 0 0 1 30.08753 1.295059l-0.632471 12.227764c-0.301176 4.246588-0.632471 7.348706-1.204706 10.992941-3.132235 20.329412-12.137412 37.074824-32.165647 58.127059a15.058824 15.058824 0 0 1-21.293176 0.542118z"
                  fill="#117c93" p-id="16866"></path>
              <path
                  d="M828.235294 421.647059h-632.470588v180.705882c0 174.652235 141.583059 316.235294 316.235294 316.235294S828.235294 777.005176 828.235294 602.352941v-180.705882z m-602.352941 0h572.235294v180.705882a286.117647 286.117647 0 0 1-286.117647 286.117647l-8.131765-0.12047A286.117647 286.117647 0 0 1 225.882353 602.352941v-180.705882z"
                  fill="#117c93" p-id="16867"></path>
              <path
                  d="M752.941176 165.647059H271.058824A135.529412 135.529412 0 0 0 135.529412 301.176471v90.352941A45.176471 45.176471 0 0 0 180.705882 436.705882h662.588236a45.176471 45.176471 0 0 0 45.17647-45.17647v-90.352941A135.529412 135.529412 0 0 0 752.941176 165.647059z m-481.882352 30.117647h481.882352a105.411765 105.411765 0 0 1 105.411765 105.411765v90.352941a15.058824 15.058824 0 0 1-15.058823 15.058823H180.705882a15.058824 15.058824 0 0 1-15.058823-15.058823v-90.352941A105.411765 105.411765 0 0 1 271.058824 195.764706z"
                  fill="#117c93" p-id="16868"></path>
              <path
                  d="M602.352941 180.705882v240.941177h-30.117647V180.705882zM451.764706 180.705882v240.941177h-30.117647V180.705882zM286.117647 180.705882v240.941177h-30.117647V180.705882zM752.941176 180.705882v240.941177h-30.117647V180.705882z"
                  fill="#117c93" p-id="16869"></path>
            </svg>
          </el-icon>
          <span>开放组件</span>
        </template>
        <el-menu-item index='/example/cropper'>图片裁剪</el-menu-item>
        <el-menu-item index='3-2'>item two</el-menu-item>
        <el-menu-item index='3-3'>item two</el-menu-item>
      </el-sub-menu>
    </el-menu>
    <!--    伸缩条-->
    <div class='bottom-bar' @click='changeMenuMode'>
      <img :src='sideMode?sideIn:sideOut'>
    </div>
  </div>

</template>

<style lang='less' scoped>
// 顶部logo
.top-logo {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 60px;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: center;

  img {
    padding: 0 10px 0 15px;
    width: 46px;
    height: 46px;
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
  padding: 60px 0 30px 0;
  //--el-menu-bg-color: #ecf5ff;
  --el-menu-border-color: #fff;
  --el-menu-text-color: #606266;
  --el-menu-hover-bg-color: #c6e2ff;
  --el-menu-active-color: #000;
}

:deep(.el-menu-item.is-active) {
  background-color: #c6e2ff;
  border-right: 1px solid #a0cfff;
}

</style>