<template>
<div class='onself'>
  <router-link to="/vueOneselfDirectives/inComponents">组件指令</router-link>
  <router-link to="/vueOneselfDirectives/inGlobal">全局指令</router-link>
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
