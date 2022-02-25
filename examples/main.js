import Vue from 'vue'
import App from './App.vue'
import ImagePreview from '../packages/index'
Vue.use(ImagePreview)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
