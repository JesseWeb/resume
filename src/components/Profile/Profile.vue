<script setup lang="ts">
import GithubIcon from '@/assets/svgs/GithubIcon.vue'
import BlogIcon from '@/assets/svgs/BlogIcon.vue'
import ContactIcon from '@/assets/svgs/ContactIcon.vue'
import MouseIcon from '@/assets/svgs/MouseIcon.vue'
import ArrowDonwIcon from '@/assets/svgs/ArrowDownIcon.vue'
</script>
<template>
   <div class="container" id="home">
      <div class="wrapper-links">
         <a class="link" target="_blank" href="//github.com/jesseweb">
            <GithubIcon class="icon-github" />
         </a>
         <a class="link" target="_blank" href="//jesseweb.github.io">
            <BlogIcon class="icon-github" />
         </a>
      </div>

      <div class="wrapper-content">
         <div class="content">
            <div class="title">{{ $t(`hi`) }}</div>
            <div class="sub-title">{{ $t(`frontendDeveloper`) }}</div>
            <div class="desc">{{ $t('selfIntroduction') }}</div>
            <a class="btn-primary" href="mailto:plunges_graham0h@icloud.com">
               <div class="text">{{ $t('contactMe') }}</div>
               <ContactIcon style="fill: #fff" />
            </a>
         </div>
         <div class="profile">
            <img src="~@/assets/imgs/profile.png" alt="" class="profile-img" />
         </div>
      </div>
      <a class="scroll-down" href="#about">
         <MouseIcon style="fill: #705bd7; font-size: 2rem" />
         <div class="tip">{{ $t('scrollDown') }}</div>
         <ArrowDonwIcon style="fill: #705bd7; font-size: 1.2rem" />
      </a>
   </div>
</template>

<style lang="less" scoped>
.container {
   padding-top: 5rem;
   width: 100%;
   background-color: var(--container-color);
   position: relative;
   display: flex;
   align-items: center;
   flex-direction: column;
   .wrapper-links {
      cursor: pointer;
      position: absolute;
      left: 2rem;
      top: 5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      border-radius: 50%;
      &:hover {
         .icon {
            fill: var(--first-color-alt);
         }
      }
      .icon {
         // color: var(--first-color);
         font-size: 1.5rem;
         cursor: pointer;
         fill: var(--first-color);
      }
   }
   .wrapper-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      width: 100%;
      gap: clamp(1rem, 3vw, 2rem);
   }
   .profile {
      display: flex;
      justify-content: center;
      align-items: center;
      .profile-img {
         border-radius: 60% 60% 60% 80%;
         width: clamp(14rem, 28vw, 18rem);
         aspect-ratio: 397/425;
         background-color: var(--first-color);
      }
   }
   .content {
      .title {
         font-size: var(--big-font-size);
         font-weight: 700;
         color: var(--title-color);
      }
      .sub-title {
         font-size: var(--h3-font-size);
         font-weight: var(--font-medium);
         color: var(--text-color);
      }
   }
   .scroll-down {
      cursor: pointer;
      margin-top: 2rem;
      display: none;
      gap: 0.2rem;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      color: var(--text-color);
   }
}
@media screen and (min-width: 75em) {
   .container {
      .scroll-down {
         display: flex;
      }
   }
   // .container .profile .profile-img {
   //    width: 18rem;
   // }
}
@media screen and (min-width: 35.5em) {
   .container {
      padding-left: 5rem;
   }
}
@media screen and (max-width: 35.5em) {
   .container {
      .wrapper-content {
         gap: 2rem;
         grid-template-columns: 1fr;
         .profile {
            grid-row: 1;
         }
      }
   }
}
</style>
