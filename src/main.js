import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import {createPinia,PiniaVuePlugin} from "pinia";
import piniaPluginPersist from "pinia-plugin-persist";
import { setCookie, getCookie, checkCookie, clearCookie } from '@/util/cookie';
Vue.prototype.$setCookie = setCookie;
Vue.prototype.$getCookie = getCookie;
Vue.prototype.$checkCookie = checkCookie;
Vue.prototype.$clearCookie = clearCookie;

Vue.use(PiniaVuePlugin)
const pinia = createPinia()
pinia.use(piniaPluginPersist)

Vue.config.productionTip = false
Vue.use(ElementUI)
axios.defaults.baseURL = 'http://localhost:9999'


new Vue({
    router,
    pinia,
    render: h => h(App)
}).$mount('#app')

//防止localStorage被篡改
window.addEventListener('storage', e => {
    localStorage.setItem(e.key, e.oldValue)
})

//防止sessionStorage被篡改
window.addEventListener('storage', e => {
    sessionStorage.setItem(e.key, e.oldValue)
})