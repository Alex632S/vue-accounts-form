import { createVueApp } from './app/setup'
import router from './router'
import App from './App.vue'

const app = createVueApp(App)
app.use(router)

app.mount('#app')
