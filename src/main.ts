import './assets/css/fonts.css'
import 'primeicons/primeicons.css'
import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import { Ripple } from 'primevue'
import Root from './presets/Root'

const app = createApp(App)

app.use(router).use(PrimeVue, {
  ripple: true,
  theme: {
    preset: Root,
    options: {
      darkModeSelector: 'light',
      cssLayer: {
        name: 'primevue',
        order: 'theme, base, primevue',
      },
    },
  },
})
app.directive('ripple', Ripple)

app.mount('#app')
