<template>
<div class='onChildren'>
  <div>
    <p>这是子组件</p>
    <p>children message: {{ message }}</p>
    <button @click="handlerClick">改变message</button>
    <button @click="remove">移除on事件监听</button>
  </div>
</div>
</template>

<script>
const { log } = console
export default {
  components: {},
  data () {
    return {
      message: '张三'
    }
  },
  computed: {},
  watch: {},
  methods: {
    handlerClick () {
      this.message += 1
      this.$emit('onChange', this.message)
      log(this)
    },
    remove () {
      // 移除完之后父组件不再接收$emit的传值
      this.$off('onChange')
      log(this)
    }
  },
  mounted () {
    this.$on('onChange', function (event) {
    log('on', event)
   })
   this.$once('onChange', function (event) {
    log('once', event)
   })
  }
}
</script>
<style lang='scss' scoped>

</style>
