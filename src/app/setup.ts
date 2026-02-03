import { createApp, type App } from 'vue'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice'
import Aura from '@primeuix/themes/aura'

import 'primeicons/primeicons.css'
import '../style.css'

export function createVueApp(AppComponent: any): App {
  const app = createApp(AppComponent)

  app.use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        prefix: 'p',
        darkModeSelector: '.p-dark',
        cssLayer: false,
      },
    },
  })

  app.use(ConfirmationService)
  app.use(ToastService)
  app.use(DialogService)

  return app
}
