<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const index = ref(0)
const qrcodes = ['/src/assets/imgs/hdqxds_qrcode.jpg', '/src/assets/imgs/mlbs_qrcode.jpeg']
onMounted(() => {
   const id = route.query.index
   if (typeof id === 'object') return
   index.value = +id
})
</script>
<template>
   <div class="qrcode-view">
      <img :src="qrcodes[index]" class="qrcode-img" />
   </div>
</template>

<style lang="less">
.qrcode-img {
   width: 165px;
   height: 165px;
}
</style>
