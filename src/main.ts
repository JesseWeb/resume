import './assets/main.css'
import './assets/variables.less'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import cn from './locales/zh-CN.json'
import en from './locales/en-US.json'
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

app.mount('#app')
