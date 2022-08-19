<script lang='ts' setup>

import {} from 'vue';
import layMenus from './menus.vue';
import layTopBar from './topBar.vue';

</script>

<template>
  <div class='container'>
    <lay-menus></lay-menus>
    <div class='right'>
      <layTopBar></layTopBar>
      <router-view style="width:100%;height:calc(100% - 60px)"></router-view>
    </div>
  </div>
</template>

<style lang='less' scoped>
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  min-width: 1280px;
}


.right {
  width: 0;
  flex-grow: 1;
  min-width: 900px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #f1f3fb;
}

</style>