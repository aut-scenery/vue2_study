import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/units/directives.js'

// 关闭生产环节的提示
Vue.config.productionTip = false
console.log(process.env.NODE_ENV)
// 取消所有的日志和警告
Vue.config.silent = true
// 自定义合并策略的选项
Vue.config.optionMergeStrategies.customOption = function (parent, child, vm) {
  console.log(parent)
  console.log(child)
  console.log(vm)
  return child || parent
}

new Vue({
  router,
  store,
  propsData: {
    msg: '这是通过propsData传递的数据'
  },
  render: h => h(App)
}).$mount('#app')
