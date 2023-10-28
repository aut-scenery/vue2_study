<template>
<div class=''>
  {{ version }}
</div>
</template>

<script>
import Vue from 'vue';
export default {
  components: {},
  data () {
    return {
      version: Vue.version
    }
  },
  computed: {},
  watch: {},
  methods: {

  },
  mounted () {
    console.log(Vue.version)
  }
}
</script>
<style lang='scss' scoped>

</style>
