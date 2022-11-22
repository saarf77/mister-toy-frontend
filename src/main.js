import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
// import { editable } from './directives'
import {
  focusDirective,
  rainbowDirective,
  customOnDirective,
  clickOutsideDirective,
  editable 
} from './directives'
import './styles/styles.css'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
// in Vue3 filters are deprecated and instead we need to use computed to get the same behavior.
// one way to make a computed globally is by app.config.globalProperties
app.config.globalProperties.$filters = {
  currencyUSD(amount) {
    // look implementation inside car-preview.vue
    return '$' + amount
  },
}
console.log('app', app)

app.directive('focus', focusDirective)
app.directive('rainbow', rainbowDirective)
app.directive('custom-on', customOnDirective)
app.directive('click-outside', clickOutsideDirective)
app.directive('editable', editable)
app.use(router)
app.use(store)
app.use(ElementPlus)

app.mount('#app')
