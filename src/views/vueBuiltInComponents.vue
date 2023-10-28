<template>
<div class=''>
  <router-link to="/vueBuiltInComponents/component">component</router-link>
  <router-link to="/vueBuiltInComponents/transition">transition</router-link>
  <router-link to="/vueBuiltInComponents/transitionGroup">transitionGroup</router-link>
  <router-link to="/vueBuiltInComponents/keepAlive">keepAlive</router-link>
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
