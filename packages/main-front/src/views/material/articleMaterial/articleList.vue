<script lang='ts' setup>

import {reactive, ref, inject} from 'vue';
import {getUserInfo} from "../../../api/example"

getUserInfo({id: 1}).then(r => {
  console.log(r)
})

const uname = inject('uname')

function onClick() {
  uname.value = 'wzk--01'
}


</script>

<template>
  <h4>素材列表</h4>
  <p>{{ uname }}</p>
  <button @click="onClick">更改uname</button>
</template>

<style lang='less' scoped>

</style>