<template>
<div class=''>
  <p>这是父级组件</p>
  <injectChildrenOne></injectChildrenOne>
</div>
</template>

<script>
import injectChildrenOne from './injectChildrenOne.vue';
export default {
  components: {
    injectChildrenOne
  },
  provide () {
    return {
      one: '这是子级组件',
      two: '这是孙级组件'
    }
  },
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

</style>
