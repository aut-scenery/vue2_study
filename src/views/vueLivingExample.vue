<template>
  <div class='LivingExample'>
    <router-link to="/vueLivingExample/reloadView">forceUpdate</router-link>
    <router-link to="/vueLivingExample/nextTick">nextTick</router-link>
    <router-link to="/vueLivingExample/destroy">destroy</router-link>
    <router-link to="/vueLivingExample/onFather">event on</router-link>
    <router-link to="/vueLivingExample/data">data</router-link>
    <router-link to="/vueLivingExample/property">property</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {

  },
  mounted() {

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
