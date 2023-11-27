<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import CloseIcon from '@/assets/svgs/CloseIcon.vue'
import NavIcon from '@/assets/svgs/NavIcon.vue'
defineProps({
   status: {
      type: String,
      default: 'home'
   }
})
let showNavs = ref(false)
let resizeEventListener = () => {
   if (document.body.clientWidth > 768) {
      showNavs.value = false
   }
}
window.addEventListener('resize', resizeEventListener)
onUnmounted(() => {
   window.removeEventListener('resize', resizeEventListener)
})
enum NavStatus {
   home = 'home',
   about = 'about',
   skills = 'skills',
   qualifications = 'qualifications',
   portfolio = 'portfolio',
   contactMe = 'contactMe'
}
const eimits = defineEmits(['changeStatus'])

function handleNavClick(item: NavStatus) {
   eimits('changeStatus', item)
}
</script>
<template>
   <div class="nav" :class="{ show: showNavs }">
      <div class="nav-title" v-if="!showNavs">{{ $t('name') }}</div>
      <div class="nav-items">
         <a
            :href="`#${item}`"
            class="item"
            :class="{ activated: status === item }"
            v-for="item in NavStatus"
            :key="item"
            @click="handleNavClick(item)"
            >{{ $t(item) }}</a
         >
      </div>
      <CloseIcon class="close-nav-btn" @click="showNavs = !showNavs" />
   </div>
   <div class="visible-control" v-if="!showNavs">
      <div class="nav-title">{{ $t('name') }}</div>
      <NavIcon @click="showNavs = !showNavs" class="open-nav-btn" />
   </div>
</template>

<style lang="less">
.nav {
   background: var(--container-color);
   z-index: 100;
   width: 100vw;
   height: 5rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 100;
   padding: 0 2rem;
   .close-nav-btn {
      display: none;
      position: absolute;
      font-size: 2.5rem;
      color: var(--text-color);
      cursor: pointer;
      &:hover {
         color: var(--first-color-alt);
      }
      right: 1.5rem;
      bottom: 1rem;
   }
   .nav-items {
      display: flex;
      align-items: center;
      gap: 2rem;
      > .item {
         color: var(--title-color);
         font-size: var(--normal-font-size);
         text-decoration: none;
         &:hover {
            color: var(--first-color-alt);
         }
         &.activated {
            color: var(--first-color);
         }
      }
   }
}
.nav-title {
   height: 2rem;
   color: var(--title-color);
   font-size: var(--normal-font-size);
   display: flex;
   align-items: center;
}
.visible-control {
   z-index: 100;
   display: none;
   position: fixed;
   bottom: 0;
   left: 0;
   justify-content: space-between;
   align-items: center;
   width: 100vw;
   padding: 1rem 2rem;
   box-shadow: 0 -1px 10px 0 rgba(0, 0, 0, 0.2);
   background-color: var(--container-color);
   .open-nav-btn {
      font-size: 1.4rem;
      color: var(--text-color);
      cursor: pointer;
      &:hover {
         color: var(--first-color-alt);
      }
   }
}
@media screen and (width < 768px) {
   .nav {
      height: 12rem;
      padding-top: 2rem;
      top: auto;
      bottom: 0;
      transform: translateY(100%);
      display: block;
      flex-direction: column;
      gap: 1rem;
      &.show {
         transform: translateY(0);
         transition: 0.3s all ease-in;
      }
      .close-nav-btn {
         display: block;
      }
      .nav-items {
         background-color: var(--bg-color);
         display: grid;
         grid-template-columns: repeat(3, 1fr);
         grid-template-rows: repeat(2, 1fr);
         gap: 0;
         > a {
            height: 3rem;
            color: var(--title-color);
            font-size: var(--normal-font-size);
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
               color: var(--first-color-alt);
            }
         }
      }
   }
   .visible-control {
      display: flex;
   }
}
</style>
