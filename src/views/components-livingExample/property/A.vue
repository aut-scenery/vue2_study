<template>
<div class=''>
  <B v-bind="$attrs" v-on="$listeners" ></B>
</div>
</template>

<script>
import B from './B.vue'
export default {
  inheritAttrs: false, // 设置为false,组件内未被注册的属性将不会作为普通html元素属性被渲染,不影响style和class
  name: 'A',
  components: {
    B
  },
  props: {
    a: String
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
    console.log('this.$attrsA', this.$attrs)
    console.log('this.$listenersA', this.$listeners) 
    // b: b   this.$attrs 只会输出不在props中传递的属性
  }
}
</script>
<style lang='scss' scoped>

</style>
