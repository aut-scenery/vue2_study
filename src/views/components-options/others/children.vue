<template>
<div class=''>
  这是子组件
</div>
</template>

<script>
export default {
  inheritAttrs: false, // 设置为false,组件内未被注册的属性将不会作为普通html元素属性被渲染,不影响style和class, 默认为 true
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

</style>
