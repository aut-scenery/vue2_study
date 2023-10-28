<template>
  <div class=''>
    <router-link to="/vueLivingExample/property/$listenersAnd$attrs">$listenersAnd$attrs</router-link>
    <router-link to="/vueLivingExample/property/$isServer">$isServer</router-link>
    <router-link to="/vueLivingExample/property/$slots">$slots</router-link>
    <router-link to="/vueLivingExample/property/$scopedSlots">$scopedSlots</router-link>
    <router-link to="/vueLivingExample/property/options">$options</router-link>
    <router-link to="/vueLivingExample/property/elAndRoot">$el and $root</router-link>
    <router-link to="/vueLivingExample/property/propsAndData">$props and $data</router-link>
    <router-view></router-view>
  </div>
  </template>
  
  <script>
  export default {
    components: {},
    data () {
      return {
  
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
  a {
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    font-weight: 600;
    color: black;
  }
  </style>
  