import { createApp, type App } from 'vue'
import PrimeVue from 'primevue/config'
import ConfirmationService from 'primevue/confirmationservice'
import DialogService from 'primevue/dialogservice'
import ToastService from 'primevue/toastservice'
import Aura from '@primeuix/themes/aura'

import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Password from 'primevue/password'
import Button from 'primevue/button'

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

  app.component('Button', Button)
  app.component('InputText', InputText)
  app.component('DataTable', DataTable)
  app.component('Column', Column)
  app.component('Select', Select)
  app.component('Password', Password)

  return app
}
