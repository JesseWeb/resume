<script setup lang="ts">
import CalendarIcon from '@/assets/svgs/CalendarIcon.vue'
const workExperience = [
   {
      title: 'frontendDeveloper',
      location: 'zhongKeHuaTong',
      timerange: '2015-2018'
   },
   {
      title: 'developmentManager',
      location: 'yuanqi',
      timerange: '2018-2021'
   },
   {
      title: 'frontendDeveloper',
      location: 'iSoftStone',
      timerange: '2021-2023'
   },
   {
      title: 'designer',
      location: 'selfEmployed',
      timerange: '2023-2023'
   }
]
</script>
<template>
   <div id="qualifications" class="container">
      <div class="wrapper-title">
         <div class="title">
            {{ $t(`qualifications`) }}
         </div>
         <div class="sub-title">
            {{ $t(`myPersonalJourney`) }}
         </div>
      </div>

      <div class="wrapper-timeline">
         <v-timeline truncate-line="both">
            <v-timeline-item
               v-for="(item, i) in workExperience"
               :key="i"
               dot-color="var(--first-color)"
               fill-dot
               size="x-small"
               color="#705BD7"
            >
               <div class="py-4">
                  <h2 :style="{ fontSize: `var(--normal-font-size)`, color: `var(--title-color)` }">
                     {{ $t(item.title) }}
                  </h2>
                  <div :style="{ fontSize: `var(--small-font-size)`, color: `var(--text-color)` }">
                     {{ $t(item.location) }}
                  </div>
                  <div
                     class="d-flex align-center"
                     :style="{
                        fontSize: `var(--smaller-font-size)`,
                        color: `var(--text-color-light)`
                     }"
                  >
                     <CalendarIcon
                        style="fill: var(--text-color-light); font-size: var(--smaller-font-size)"
                     /> {{item.timerange}}
                  </div>
               </div>
            </v-timeline-item>
         </v-timeline>
      </div>
   </div>
</template>
<style lang="less" scoped>
:deep(.v-timeline-divider__after) {
   background-color: var(--first-color);
}
:deep(.v-timeline--vertical .v-timeline-divider__before) {
   background-color: var(--first-color);
}
:deep(.v-timeline--vertical .v-timeline-divider__after) {
   width: 2px;
}
:deep(.v-timeline-divider__dot--size-x-small) {
   height: 1rem;
   width: 1rem;
}
.container {
   min-height: calc(100svh - 1rem);
   display: flex;
   flex-direction: column;
   align-items: center;
   padding-top: 3rem;
   padding-bottom: 2rem;
   .sub-title {
      font-size: var(--small-font-size);
      color: var(--text-color-light);
   }
   .wrapper-timeline {
      width: 60%;
      max-width: 25rem;
   }
}
@media screen and (width < 568px) {
   .container {
      margin-top: 6rem;
      .wrapper-timeline {
         width: 100%;
         max-width: 100%;
      }
   }
}
@media screen and (width < 1024px) and (width >= 768px) {
   .container {
      margin-top: 3rem;
      padding-top: 5rem;
   }
}
@media screen and (width >= 1024px) {
   .container {
      margin-top: 3rem;
      padding-top: 5rem;
   }
}
</style>
