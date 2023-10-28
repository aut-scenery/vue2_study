<template>
  <div class="home">
    <router-link to="/vueInstruction">vue指令</router-link>
    <router-link to="/vueAttribute">vue 属性</router-link>
    <router-link to="/vueLivingExample">vue实例</router-link>
    <router-link to="/vueOneselfDirectives">vue自定义指令</router-link>
    <router-link to="/Jsx">Jsx</router-link>
    <router-link to="/vueOptions">vue选项</router-link>
    <router-link to="/vueBuiltInComponents">vue内置组件</router-link>
    <router-link to="/dynamicClassAndStyle">vue动态绑定class和style</router-link>
    <router-link to="/lifeCycle">vue生命周期</router-link>
    <router-link to="/globalApi">全局api</router-link>
    <router-link to="/myself">my test</router-link>
  </div>
</template>

<script>
import homeExtends from "./homeExtends";
export default {
  extends: homeExtends,
  name: 'Home',
  customOption: 'This is home',
  components: {
    
  },
  created () {
    console.log(this.$options.customOption);
  }
}
</script>
<style lang="scss" scoped>
a {
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 600;
  color: black;
}
</style>