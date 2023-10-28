<template>
<div class=''>
  <div>
    <h1>vm.$options的使用</h1>
    <div>作用: 获取自定义选项</div>
    <p>{{ $options.customOption }}</p>
  </div>
</div>
</template>

<script>
export default {
  customOption: 'foo',
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
   console.log(this.$options)
  }
}
</script>
<style lang='scss' scoped>

</style>
