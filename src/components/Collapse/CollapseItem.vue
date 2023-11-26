<script setup lang="ts">
import DownIcon from '@/assets/svgs/DownIcon.vue'
import UpIcon from '@/assets/svgs/UpIcon.vue'
type Props = {
   title: string
   subTitle: string
   isShow: boolean
}
defineProps<Props>()
const emits = defineEmits(['changeStatus'])
</script>
<template>
   <div class="collapse-item">
      <div
         class="wrapper-collapse-title"
         @click="emits('changeStatus', !isShow)"
      >
         <div class="main-icon">
            <slot name="icon"></slot>
         </div>
         <div class="wrapper-text">
            <div class="text">{{ title }}</div>
            <div class="sub-title">{{ subTitle }}</div>
         </div>
         <div class="icon-click-box">
            <DownIcon
               v-if="!isShow"
               style="fill: var(--first-color); width: 1rem; font-weight: 800"
            />
            <UpIcon v-else style="fill: var(--first-color); width: 1rem; font-weight: 800" />
         </div>
      </div>
      <div class="content" :class="{ show: isShow }">
         <div class="inner">
            <slot name="default"></slot>
         </div>
      </div>
   </div>
</template>
<style lang="less" scoped>
.wrapper-collapse-title {
   display: flex;
   justify-content: space-between;
   gap: 1rem;
   align-items: center;

   .main-icon {
      width: 2rem;
   }
   .wrapper-text {
      flex: calc(100% - 6rem) 0 0;
      text-align: left;
      .text {
         font-size: var(--h3-font-size);
         font-weight: 800;
         color: var(--title-color);
      }
      .sub-title {
         font-size: var(--small-font-size);
         color: var(--text-color);
      }
   }
   .icon-click-box {
      cursor: pointer;
      width: 2rem;
      height: 100%;
      display: flex; 
      justify-content: center;
      align-items: center;
   }
}
.collapse-item {
   width: 100%;
   .content {
      display: grid;
      grid-template-rows: 0fr;
      padding-left: 3rem;
      overflow: hidden;
      transition: all 0.3s ease-in-out;
      &.show {
         grid-template-rows: 1fr;
         padding-top: 3rem;
         padding-bottom: 1rem;
      }
      .inner{
         overflow: hidden;
      }
   }
}
</style>
