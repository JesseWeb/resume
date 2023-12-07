<script setup lang="ts">
import { ref } from 'vue'
import ProgressBar from '@/components/ProgressBar/ProgressBar.vue'
import CollapseItem from '@/components/Collapse/CollapseItem.vue'
import FrontendIcon from '@/assets/svgs/FrontendIcon.vue'
import BackendIcon from '@/assets/svgs/BackendIcon.vue'
import ManagerIcon from '@/assets/svgs/ManagerIcon.vue'
import DesignerIcon from '@/assets/svgs/DesignerIcon.vue'
const collapses = [
   {
      title: 'frontendDeveloper',
      years: 4,
      icon: FrontendIcon,
      skills: [
         { name: 'HTML', percent: 90 },
         { name: 'CSS', percent: 90 },
         { name: 'JS', percent: 90 },
         { name: 'Vue', percent: 85 },
         { name: 'NextJS', percent: 60 },
         { name: 'React', percent: 70 }
      ]
   },
   {
      title: 'backendDeveloper',
      years: 1,
      icon: BackendIcon,
      skills: [
         { name: 'NodeJS', percent: 90 },
         { name: 'Express', percent: 80 },
         { name: 'EggJs', percent: 80 },
         { name: 'MongoDB', percent: 80 },
         { name: 'MySQL', percent: 60 }
      ]
   },
   {
      title: 'developmentManager',
      years: 3,
      icon: ManagerIcon,
      skills: [
         { name: 'Git', percent: 90 },
         { name: 'Communication', percent: 80 },
         { name: 'Project Management ', percent: 90 },
         { name: 'Research', percent: 80 }
      ]
   },
   {
      title: 'designer',
      years: 0.5,
      icon: DesignerIcon,
      skills: [
         { name: 'Photoshop', percent: 50 },
         { name: 'Figma', percent: 60 }
      ]
   }
]
const openingCollapse = ref('frontendDeveloper')
</script>
<template>
   <div id="skills" class="container">
      <div class="wrapper-title">
         <div class="title">
            {{ $t(`skills`) }}
         </div>
         <div class="sub-title">
            {{ $t(`myTechnicalLevel`) }}
         </div>
      </div>
      <div class="collapses">
         <CollapseItem
            class="collapse-item"
            v-for="collapse in collapses"
            :isShow="collapse.title === openingCollapse"
            :title="$t(collapse.title)"
            :subTitle="$t('moreThan?Years', [collapse.years])"
            :key="collapse.title"
            @changeStatus="
               openingCollapse === collapse.title
                  ? (openingCollapse = '')
                  : (openingCollapse = collapse.title)
            "
         >
            <template #icon>
               <component
                  :is="collapse.icon"
                  style="fill: var(--first-color); font-size: 2rem; font-weight: 800"
               />
            </template>
            <template #default>
               <div
                  class="wrapper-progress-bar"
                  :key="progress.name"
                  v-for="progress in collapse.skills"
               >
                  <ProgressBar :count="progress.percent" :name="progress.name" />
               </div>
            </template>
         </CollapseItem>
      </div>
   </div>
</template>
<style lang="less" scoped>
.container {
   min-width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   .sub-title {
      font-size: var(--small-font-size);
      color: var(--text-color-light);
   }
   .collapses {
      margin-top: 2rem;
      width: 100%;
      display: grid;
      gap: 2rem;
      grid-template-columns: repeat(2, minmax(14.5rem, 1fr));
      .collapse-item {
         margin-bottom: 2rem;
      }
   }
   .wrapper-progress-bar {
      margin-bottom: 1rem;
   }
}
@media screen and (max-width: 35.5em) {
   .container {
      .collapses {
         grid-template-columns: 1fr;
      }
   }
}
@media screen and (max-width: 75em) and (min-width: 48em) {
   .container {
      // padding-top: 5rem;
      .collapses {
         grid-template-columns: 1fr;
      }
   }
}
</style>
