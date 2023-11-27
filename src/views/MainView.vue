<script setup lang="ts">
import Profile from '@/components/Profile/Profile.vue'
import NavBar from '@/components/NavBar/NavBar.vue'
import AboutMe from '@/components/AboutMe/AboutMe.vue'
import Skills from '@/components/Skills/Skills.vue'
import Qualifications from '@/components/Qualifications/Qualifications.vue'
import Portfolio from '@/components/Portfolio/Portfolio.vue'
import ContactMe from '@/components/ContactMe/ContactMe.vue'
import ArrowUpIcon from '@/assets/svgs/ArrowUpIcon.vue'
import { debounce } from 'lodash'
import { ref } from 'vue'
let status = ref('home')
function onScroll(e: any) {
   const scrollTop = e.target.scrollTop
   const aboutMe = document.getElementById('about')
   const skills = document.getElementById('skills')
   const qualifications = document.getElementById('qualifications')
   const portfolio = document.getElementById('portfolio')
   const contactMe = document.getElementById('contactMe')
   if (
      aboutMe &&
      skills &&
      scrollTop > aboutMe.offsetTop - 200 &&
      scrollTop < skills.offsetTop - 200
   ) {
      status.value = 'about'
   } else if (
      skills &&
      qualifications &&
      scrollTop > skills.offsetTop - 200 &&
      scrollTop < qualifications.offsetTop - 200
   ) {
      status.value = 'skills'
   } else if (
      qualifications &&
      portfolio &&
      scrollTop > qualifications.offsetTop - 200 &&
      scrollTop < portfolio.offsetTop - 200
   ) {
      status.value = 'qualifications'
   } else if (
      portfolio &&
      contactMe &&
      scrollTop > portfolio.offsetTop - 200 &&
      scrollTop < contactMe.offsetTop - 200
   ) {
      status.value = 'portfolio'
   } else if (contactMe && scrollTop > contactMe.offsetTop - 200) {
      status.value = 'contactMe'
   } else {
      status.value = 'home'
   }
}
const onScrollDebounce = debounce(onScroll, 100)
</script>

<template>
   <main class="main-view" @scroll="onScrollDebounce">
      <NavBar @changeStatus="status = $event" :status="status" />
      <Profile />
      <AboutMe />
      <Skills />
      <Qualifications />
      <Portfolio />
      <ContactMe />
      <a class="go-top" v-if="status !== 'home'" href="#home">
         <ArrowUpIcon style="fill: #fff" />
      </a>
   </main>
</template>

<style lang="less" scoped>
.main-view {
   scroll-behavior: smooth;
   box-sizing: border-box;
   max-width: 1700px;
   overflow-y: scroll;
   height: 100svh;
   padding: 5rem 2rem 0 2rem;
   padding-top: 0;
   width: 100%;
   min-width: 350px;
   position: relative;
}
.go-top {
   font-size: 1.2rem;
   position: fixed;
   bottom: 5rem;
   right: 1.8rem;
   z-index: 100;
   background-color: var(--first-color);
   color: var(--text-color-light);
   border-radius: 0.3rem;
   width: 2rem;
   height: 2rem;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   transition: all 0.3s ease;
   &:hover {
      background-color: var(--first-color-lighter);
   }
}

@media screen and (width < 768px) {
   .main-view {
      padding-left: 2rem;
      padding-right: 2rem;
   }
}
@media screen and (width >= 1024px) {
   .main-view {
      padding: 0 10rem;
   }
}
</style>
