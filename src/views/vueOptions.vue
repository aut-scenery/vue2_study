<template>
<div class=''>
  <router-link to="/vueOptions/comments">comments</router-link>
  <router-link to="/vueOptions/inheritAttrs">inheritAttrs</router-link>
  <router-link to="/vueOptions/model">model</router-link>
  <router-link to="/vueOptions/functional">functional</router-link>
  <router-link to="/vueOptions/delimiters">delimiters</router-link>
  <router-link to="/vueOptions/provideAndInject">provideAndInject</router-link>
  <router-link to="/vueOptions/extends">extends</router-link>
  <router-link to="/vueOptions/resource">resource</router-link>
  <router-link to="/vueOptions/DOM">DOM</router-link>
  <router-link to="/vueOptions/optionsData">data</router-link>
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
