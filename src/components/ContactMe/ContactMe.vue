<script setup lang="ts">
</script>
<template>
   <div id="contactMe" class="container">
      <div class="wrapper-title">
         <div class="title">
            {{ $t(`contactMe`) }}
         </div>
         <div class="sub-title">
            {{ $t(`getInTouch`) }}
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
@media screen and (width < 35.5em) {
   .container {
      margin-top: 6rem;
   }
}
@media screen and (width < 75em) and (width >= 48em) {
   .container {
      margin-top: 3rem;
      padding-top: 5rem;
   }
}
@media screen and (width >= 75em) {
   .container {
      margin-top: 3rem;
      padding-top: 5rem;
   }
}
</style>
