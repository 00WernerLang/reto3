import { createApp } from 'vue'
import App from './App.vue'
import 'primeflex/primeflex.css'
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/lara-light-indigo/theme.css'

const app = createApp(App)
app.use(PrimeVue)
app.mount('#app')