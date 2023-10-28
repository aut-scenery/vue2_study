<template>
  <div class=''>
    <div v-color="color">
      这是组件内的自定义指令
    </div>
    <div v-color:fontWeight="'600'">
      这是组件内的自定义指令
    </div>
  </div>
  </template>
  
  <script>
  export default {
    components: {},
    data() {
      return {
        color: 'red'
      }
    },
    directives: {
      color: {
        inserted(el){
          // 被绑定元素插入父节点时调用 
          console.log('inserted-el',el)
        },
        bind(el, binding) {
          console.log(el)
          console.log(binding)
          if (binding.arg) {
            const key = binding.arg
            el.style[key] = binding.value
          } else {
            el.style.color = binding.value; //color为动态绑定的data中color的值
          }
        },
        update(el) {
          // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。
          console.log('directives-update',el)
        },
        componentUpdated (el, binding, vnode, oldvnode) {
          // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
          console.log('directives-componentUpdated',el)
        },
        unbind (el) {
          // 只调用一次，指令与元素解绑时调用
          console.log('directives-unbind',el)
        }
      }
    },
    computed: {},
    watch: {},
    methods: {
  
    },
    mounted () {
  
    }
  }
  </script>
  <style lang='scss' scoped>
  
  </style>
  