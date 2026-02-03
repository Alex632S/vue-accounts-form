import { createVueApp } from './app/setup'
import App from './App.vue'
import { createPinia } from 'pinia'

const app = createVueApp(App)
const pinia = createPinia()

app.use(pinia)

app.mount('#app')
