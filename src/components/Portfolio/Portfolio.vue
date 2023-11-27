<script setup lang="ts">
</script>
<template>
   <div id="portfolio" class="container">
      <div class="wrapper-title">
         <div class="title">
            {{ $t(`portfolio`) }}
         </div>
         <div class="sub-title">
            {{ $t(`mostRecentWork`) }}
         </div>
      </div>
   </div>
</template>
<style lang="less" scoped>
.container {
   min-height: calc(100svh - 1rem);
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 3rem;
   .sub-title {
      font-size: var(--small-font-size);
      color: var(--text-color-light);
   }
}
@media screen and (width < 568px) {
   .container {
      margin-top: 6rem;
   }
}
@media screen and (width < 1024px) and (width >= 768px) {
   .container {
      margin-top: 3rem;
      padding-top: 5rem;
   }
}
@media screen and (width >= 1024px) {
   .container {
      margin-top: 3rem;
      padding-top: 5rem;
   }
}
</style>
