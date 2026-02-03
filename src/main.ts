import { createVueApp } from './app/setup'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createVueApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

app.mount('#app')
