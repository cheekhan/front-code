<script lang="ts" setup>
const subCrypto: SubtleCrypto = window.crypto.subtle;
// const key = "SDFSDFlkdjflkjk";
const C = Math.floor(new Date().getTime() / 1000 / 30);
subCrypto.generateKey({name: 'HMAC', hash: "SHA-1"}, false, ['sign'])
    .then(key => {
      subCrypto.sign('SHA-1', key, new ArrayBuffer(8)).then(r => {
        console.log(r)
      })
    })

</script>

<template>
  <h2>加解密算法</h2>
</template>

<script lang="ts">
import {defineComponent} from "vue"

export default defineComponent({
  name: "Crypto",
})
</script>

<style scoped lang='less'>

</style>