<script setup lang="ts">
import DownloadIcon from '@/assets/svgs/DownloadIcon.vue'
</script>
<template>
   <div class="container" id="about">
      <div class="wrapper-title">
         <div class="title">
            {{ $t(`aboutMe`) }}
         </div>
         <div class="sub-title">
            {{ $t(`myIntroduction`) }}
         </div>
      </div>
      <div class="content">
         <div class="wrapper-img">
            <img class="profile-img" src="~@/assets/imgs/wyz.jpg" alt="" />
         </div>
         <div class="introduction">
            <div class="text">{{ $t('introduction') }}</div>
            <div class="history-point">
               <div class="item">
                  <div class="count">08+</div>
                  <div class="unit">{{ $t('years') }}</div>
                  <div class="desc">{{ $t('experience') }}</div>
               </div>
               <div class="item">
                  <div class="count">12+</div>
                  <div class="unit">{{ $t('compeleted') }}</div>
                  <div class="desc">{{ $t('projects') }}</div>
               </div>
               <div class="item">
                  <div class="count">03+</div>
                  <div class="unit">{{ $t('companies') }}</div>
                  <div class="desc">{{ $t('worked') }}</div>
               </div>
            </div>
            <div class="wrapper-btn">
               <a class="btn-primary" href="www.baidu.com" target="_blank">
                  <div class="text">{{ $t('downloadCV') }}</div>
                  <DownloadIcon
                     style="fill: #fff; font-size: 1rem; font-weight: 800"
                  />
               </a>
            </div>
         </div>
      </div>
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
   .history-point {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      .item {
         display: flex;
         flex-direction: column;
         align-items: center;
         .count {
            font-size: 2rem;
            font-weight: 600;
            color: var(--title-color);
         }
         .unit {
            font-size: var(--normal-font-size);
            font-weight: 400;
            color: var(--text-color);
         }
         .desc {
            font-size: var(--normal-font-size);
            font-weight: 400;
            color: var(--text-color);
         }
      }
   }

   

   .content {
      margin-top: 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr;
      gap: clamp(2rem, 5vw, 5rem);
      justify-content: center;
      align-items: center;
      .wrapper-img {
         display: flex;
         justify-content: center;
         align-self: flex-end;
      }
      .introduction {
         height: 100%;
         > .text {
            font-size: var(--normal-font-size);
            font-weight: 400;
            color: var(--text-color);
            line-height: 1.5;
         }
      }
   }
   .profile-img {
      aspect-ratio: 656 / 463;
      border-radius: 0.5rem;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
   }
}
@media screen and (max-width: 35.5em) {
   .container{
      padding-top: 3rem;
   }
   .container .wrapper-btn {
      width: 100%;
      display: flex;
      justify-content: center;
   }
   .container .content {
      grid-template-columns: 1fr;
   }
}
// @media screen and (min-width: 48em) {
//    .container {
//       padding-top: 5rem;
//    }
   
// }
</style>
