import './assets/main.less'
import './assets/variables.less'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import cn from './locales/zh-CN.json'
import en from './locales/en-US.json'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VTimeline, VTimelineItem, VCarousel, VCarouselItem } from 'vuetify/components'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
const vuetify = createVuetify({
   icons: {
      defaultSet: 'mdi' // This is already the default value - only for display purposes
   },
   components: {
      VTimeline,
      VTimelineItem,
      VCarousel,
      VCarouselItem
   }
})

type MessageSchema = typeof cn

const app = createApp(App)
const i18n = createI18n<[MessageSchema], 'en-US' | 'zh-CN'>({
   messages: {
      'zh-CN': cn,
      'en-US': en
   }
})
app.use(router)
app.use(i18n)
app.use(vuetify)

app.mount('#app')
