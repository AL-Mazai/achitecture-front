import {createPinia, defineStore} from "pinia";
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist)

export const businessStore = defineStore("businessStore", {
    state: () => {
        return {
            businessId: '1',
            businessName: '',
        }
    },
    persist: {
        enabled: true,
        strategies: [
            {
                storage: localStorage, //默认是sessionStorage
                paths: ['businessId','businessName'],//指定需要持久化存储的数据
            }
        ]
    }
})

export default businessStore