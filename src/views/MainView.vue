<script setup lang="ts">
import Profile from '@/components/Profile/Profile.vue'
import NavBar from '@/components/NavBar/NavBar.vue'
import AboutMe from '@/components/AboutMe/AboutMe.vue'
import Skills from '@/components/Skills/Skills.vue'
import Qualifications from '@/components/Qualifications/Qualifications.vue'
import Portfolio from '@/components/Portfolio/Portfolio.vue'
import ContactMe from '@/components/ContactMe/ContactMe.vue'
import FooterComponent from '@/components/Footer/Footer.vue'
import ArrowUpIcon from '@/assets/svgs/ArrowUpIcon.vue'
import { debounce } from 'lodash'
import { ref, onMounted, onUnmounted } from 'vue'
let status = ref('home')
function onScroll() {
   const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop
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
onMounted(() => {
   window.addEventListener('scroll', onScrollDebounce)
})
onUnmounted(() => {
   window.removeEventListener('scroll', onScrollDebounce)
})
</script>

<template>
   <main class="main-view">
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
      <div class="footer">
         <FooterComponent />
      </div>
   </main>
</template>

<style lang="less" scoped>
.full-height-wrapper {
   min-height: 100svh;
   display: flex;
}
.main-view {
   padding-top: 5rem;
   max-width: 106.25rem;
   width: 100%;
   min-width: 350px;
   position: relative;
   .footer {
      margin-top: 2rem;
   }
}
.go-top {
   font-size: 1.2rem;
   position: fixed;
   bottom: 5rem;
   right: 2rem;
   bottom: 6rem;
   z-index: 99;
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
@media screen and (max-width: 48em) {
   .main-view {
      padding-top: 0;
      padding-bottom: 4rem;
   }
}
@media screen and (min-width: 75em) {
   .main-view {
      padding-left: 10rem;
      padding-right: 10rem;
   }
}
</style>
