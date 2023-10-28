<template>
<div class='Destroy'>
  <p>调用this.$destroy将进入销毁阶段</p>
  <div class="destroy">
    <div>
      <button @click="() => num++">加一</button>
      <p>{{ num }}</p>
    </div>
    <div>
      <button @click="()=> name = '李四'">改名</button>
      <p>{{ name }}</p>
    </div>
  </div>
  <button @click="init">初始化</button>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      num: 0,
      name: '张三'
    }
  },
  computed: {},
  watch: {},
  methods: {
    init () {
      this.$destroy()
      setTimeout (() => {
        console.log(this.$data)
      })
    }
  },
  mounted () {
    
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  }
}
</script>
<style lang='scss' scoped>
.destroy {
  width: 400px;
  display: flex;
  div {
    width: 200px;
  }
}
</style>
