<script setup lang="ts">
import EmailIcon from '@/assets/svgs/EmailIcon.vue'
import LocationIcon from '@/assets/svgs/LocationIcon.vue'
import ContactIcon from '@/assets/svgs/ContactIcon.vue'
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
      <div class="content">
         <div class="left-part">
            <div class="item">
               <div class="wrapper-icon">
                  <EmailIcon style="fill: var(--first-color); font-size: 2.5rem" />
               </div>
               <div class="wrapper-text">
                  <div class="title">Email</div>
                  <a class="desc" href="mailto:plunges_graham0h@icloud.com"
                     >plunges_graham0h@icloud.com</a
                  >
               </div>
            </div>
            <div class="item">
               <div class="wrapper-icon">
                  <LocationIcon style="fill: var(--first-color); font-size: 2.5rem" />
               </div>
               <div class="wrapper-text">
                  <div class="title">
                     {{ $t(`location`) }}
                  </div>
                  <div class="desc">
                     {{ $t(`shenzhenLocation`) }}
                  </div>
               </div>
            </div>
         </div>
         <div class="right-part">
            <div class="form">
               <input type="text" placeholder="Name" class="input-primary name" />
               <input type="email" placeholder="Email" class="input-primary email" />
               <input type="text" placeholder="Project" class="input-primary project" />
               <textarea placeholder="Message" class="input-primary textarea"></textarea>
               <a class="btn-primary" href="mailto:plunges_graham0h@icloud.com">
                  <div class="text">{{ $t('sendMessage') }}</div>
                  <ContactIcon style="fill: #fff" />
               </a>
            </div>
         </div>
      </div>
   </div>
</template>
<style lang="less" scoped>
.input-primary {
   &.project {
      grid-column: span 2;
   }
   &.textarea {
      height: 10rem;
      padding: 1rem;
      grid-column: span 2;
   }
   width: 100%;
   height: 3rem;
   border-radius: 0.3rem;
   border: 1px solid var(--first-color);
   padding: 0 1rem;
   font-size: var(--small-font-size);
   color: var(--title-color);
   background-color: var(--container-color);
   &:focus {
      outline: none;
      border-color: var(--first-color-alt);
   }
}
.container {
   display: flex;
   flex-direction: column;
   align-items: center;
   .btn-primary {
      margin-top: 0;
   }
   .sub-title {
      font-size: var(--small-font-size);
      color: var(--text-color-light);
   }
   .content {
      margin-top: 5rem;
      width: min(100%, 58rem);
      display: grid;
      gap: clamp(2rem, 2vw, 5rem);
      grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
   }
   .left-part {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .item {
         display: flex;
         gap: 2rem;
         align-items: center;
         .title {
            font-size: var(--h1-font-size);
            color: var(--title-color);
         }
         .desc {
            font-size: var(--small-font-size);
            color: var(--text-color-light);
         }
      }
   }
   .right-part {
      .form {
         display: grid;
         grid-template-columns: 1fr 1fr;
         gap: 1rem;
      }
   }
}
</style>
