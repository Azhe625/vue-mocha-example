import store from '@/store'
import { createLocalVue } from '@vue/test-utils'
// import router from '@/router'
import Bus from 'vue'

// 创建一个扩展的 `Vue` 构造函数
const localVue = createLocalVue()
const bus = new Bus()
localVue.prototype.$bus = bus
export function localPlugins() {
    return {
        localVue,
        store,
        // router
    }
}