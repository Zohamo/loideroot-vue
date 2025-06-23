import './assets/css/fonts.css'
import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import Nora from '@primeuix/themes/nora'
import { definePreset } from '@primeuix/themes'

const MyPreset = definePreset(Nora, {
  semantic: {
    primary: {
      50: '{amber.50}',
      100: '{amber.100}',
      200: '{amber.200}',
      300: '{amber.300}',
      400: '{amber.400}',
      500: '{amber.500}',
      600: '{amber.600}',
      700: '{amber.700}',
      800: '{amber.800}',
      900: '{amber.900}',
      950: '{amber.950}',
    },
  },
  components: {
    menubar: {
      colorScheme: {
        light: {
          root: {
            background: 'transparent',
            borderColor: 'none',
          },
          submenu: {
            background: '#f8ecd8',
          },
        },
      },
    },
  },
})

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: MyPreset,
    options: {
      darkModeSelector: 'light',
    },
  },
})

app.mount('#app')
