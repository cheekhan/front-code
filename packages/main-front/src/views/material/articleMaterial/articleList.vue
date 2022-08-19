<script lang='ts' setup>

import {} from 'vue';
import {getUserInfo} from "../../../api/example"

getUserInfo({id: 1}).then(r => {
  console.log(r)
})

</script>

<template>
  <h4>素材列表</h4>
</template>

<style lang='less' scoped>

</style>