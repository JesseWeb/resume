<script lang="ts"></script>
<template>
   <div class="footer-wrapper">
      <div class="left">
         <div class="title">{{ $t('name') }}</div>
         <div class="sub-title">{{ $t('frontendDeveloper') }}</div>
      </div>
      <div class="right">
         <a href="#">{{ $t('home') }}</a>
         <a href="#portfolio">{{ $t('portfolio') }}</a>
         <a href="#contactMe">{{ $t('contactMe') }}</a>
      </div>
      <div class="foot-copy-right">@2023 {{ $t('name') }}. {{ $t('allRightsReserved') }}</div>
   </div>
</template>

<style lang="less" scoped>
.footer-wrapper {
   min-width: 100%;
   background-color: var(--first-color-second);
   display: grid;
   grid-template-columns: 1fr 1fr;
   padding: 2rem 0 3rem;
   grid-auto-rows: auto;
   .left {
      display: flex;
      justify-content: center;
      flex-direction: column;
      color: #fff;
      align-items: center;
      font-size: var(--h1-font-size);
      .sub-title {
         font-size: var(--small-font-size);
         color: #fff;
         text-align: center;
      }
   }
   .right {
      width: auto;
      display: flex;
      justify-content: center;
      gap: 3.5rem;
      align-items: center;
      flex-wrap: wrap;
      > a {
         color: #fff;
      }
   }
   .foot-copy-right {
      grid-column: span 2;
      color: var(--text-color-light);
      text-align: center;
      font-size: var(--smaller-font-size);
      margin-top: 2rem;
   }
}
@media screen and (max-width: 48em) {
   .footer-wrapper {
      grid-template-columns: 1fr;
      gap: 2rem;
      .foot-copy-right {
         grid-column: span 1;
      }
   }
}
</style>
