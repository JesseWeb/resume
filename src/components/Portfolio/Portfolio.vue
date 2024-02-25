<script setup lang="ts">
import ContactIcon from '@/assets/svgs/ContactIcon.vue'
import ArrowLeftIcon from '@/assets/svgs/ArrowLeftIcon.vue'
import ArrowRightIcon from '@/assets/svgs/ArrowRightIcon.vue'
const slides = [
   {
      img: 'https://img.picgo.net/2023/11/28/Screenshot-2023-11-28-at-11.15.57PM96623a377ea24d4d.png',
      title: '烘豆曲线大师',
      desc: '小程序, 用于手动记录烘豆的温度曲线, 曲线分享。',
      demoUrl: ''
   },
   {
      img: '/src/assets/imgs/mlbs_logo.png',
      title: '魅力宝水',
      desc: '2024年宝安区水务局水务宣传小程序',
      demoUrl: ''
   }
]
function checkDemo(index: number) {
   var myWindow = window.open(`/qrcode?index=${index}`, 'MsgWindow', 'width=400,height=200')
}
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

      <v-carousel
         class="carousel"
         color="var(--first-color)"
         height="20em"
         show-arrows="hover"
         hide-delimiter-background
      >
         <template v-slot:prev="{ props }">
            <ArrowLeftIcon
               @click="props.onClick"
               style="fill: var(--first-color); cursor: pointer; font-size: var(--h1-font-size)"
            />
         </template>
         <template v-slot:next="{ props }">
            <ArrowRightIcon
               @click="props.onClick"
               style="fill: var(--first-color); cursor: pointer; font-size: var(--h1-font-size)"
            />
         </template>
         <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <div class="carousel-item">
               <div class="left">
                  <img :src="slide.img" :alt="slide.title" />
               </div>
               <div class="right">
                  <div class="title">{{ slide.title }}</div>
                  <div class="desc">{{ slide.desc }}</div>
                  <a class="btn-primary" @click="checkDemo(i)">
                     <div class="text">Demo</div>
                     <ContactIcon style="fill: #fff" />
                  </a>
               </div>
            </div>
         </v-carousel-item>
      </v-carousel>
   </div>
</template>
<style lang="less" scoped>
.container {
   display: flex;
   flex-direction: column;
   align-items: center;
   .sub-title {
      font-size: var(--small-font-size);
      color: var(--text-color-light);
   }
   .carousel-item {
      height: 100%;
      padding: 5rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      height: 20rem;
      gap: 2rem;
      grid-template-rows: 10rem;
      .left {
         img {
            width: 100%;
            height: 100%;
            object-fit: contain;
         }
      }
      .right {
         .title {
            color: var(--title-color);
            font-size: var(--h3-font-size);
            font-weight: var(--font-semi-bold);
         }
         .desc {
            color: var(--text-color-light);
            font-size: var(--small-font-size);
         }
         .btn-primary {
            margin-top: 0.5rem;
         }
      }
   }
}
@media screen and (max-width: 35.5em) {
   .container .carousel-item {
      grid-template-columns: 1fr;
      height: 100%;
      padding: 3rem;
   }
   .container {
      margin-top: 6rem;
      .carousel {
         font-size: 1.5rem;
      }
   }
}
</style>
