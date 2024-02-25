import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import QRCodeView from '@/views/QRCodeView.vue'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'home',
         component: MainView
      },
      {
         path: '/qrcode',
         name: 'qrcode',
         component: QRCodeView
      }
   ]
})

export default router
