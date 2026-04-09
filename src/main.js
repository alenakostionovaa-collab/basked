import { createApp } from 'vue'
import './style.css'
import { createPinia } from 'pinia'//данные доставка
import App from './App.vue'


const pinia = createPinia()
const app = createApp(App)//сборка

app.use(createPinia())
app.use(pinia)
app.mount('#app')