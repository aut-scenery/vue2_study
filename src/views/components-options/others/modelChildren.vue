<template>
<div class=''>
  我是model的子组件
  <button @click="$emit('change', check === '李四'? '张三' : '李四')">按钮</button>
  <p>{{ check }}</p>
</div>
</template>

<script>
export default {
  model: { // 允许一个自定义组件在使用 v-model 时定制 prop 和 event
    prop: 'check',
    event: 'change'
  },
  components: {},
  props: {
    check: {
      type: String,
      default: ''
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
    console.log(this.check)
  }
}
</script>
<style lang='scss' scoped>

</style>
