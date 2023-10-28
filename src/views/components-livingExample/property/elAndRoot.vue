<template>
<div class=''>
  <div>$el和$root的区别:</div>
  <div>$el：获取Vue 实例使用的根 DOM 元素</div>
  <div>$root: 获取当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己。</div>
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
    console.log(this.$root)
    console.log(this.$el)
  }
}
</script>
<style lang='scss' scoped>

</style>
