<template>
  <div class=''>
    <div v-color="color">
      这是组件内的自定义指令
    </div>
    <div v-color:fontSize="'20px'">
      这是组件内的自定义指令
    </div>
  </div>
  </template>
  
  <script>
  export default {
    components: {},
    data() {
      return {
        color: 'yellow'
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
  