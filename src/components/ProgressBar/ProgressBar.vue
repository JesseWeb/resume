<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
   name: String,
   count: {
      type: Number,
      default: 0
   }
})
const width = computed(() => {
   return `${(props.count / 100) * 100}%`
})
</script>
<template>
   <div class="progress-bar">
      <div class="desc">
         <div class="name">{{ name }}</div>
         <div class="count">{{ count }}%</div>
      </div>
      <div class="bar-wrapper">
         <div class="bar" :style="{ width }"></div>
      </div>
   </div>
</template>
<style lang="less" scoped>
.progress-bar {
   display: flex;
   flex-direction: column;
   width: 100%;
   flex: 1;
   &:hover .desc .name {
      background-size: 100% 0.2rem;
   }
   .desc {
      display: flex;
      justify-content: space-between;
      .name {
         padding-bottom: 0.1rem;
         display: inline;
         font-size: var(--normal-font-size);
         font-weight: 400;
         color: var(--title-color);
         background-image: linear-gradient(
            to right,
            var(--first-color-lighter),
            var(--first-color)
         );
         background-size: 0 0.2rem;
         background-repeat: no-repeat;
         background-position: 0 100%;
         transition: 0.3s all ease-in-out;
      }
      .count {
         font-size: var(--normal-font-size);
         color: var(--text-color-light);
      }
   }
   .bar-wrapper {
      width: 100%;
      height: 0.5rem;
      background-color: var(--progress-bg-color);
      border-radius: 0.5rem;
      margin-top: 0.5rem;
      .bar {
         width: 0%;
         height: 100%;
         background-color: var(--first-color);
         border-radius: 0.5rem;
         transition: 0.3s all ease-in-out;
      }
   }
}
</style>
