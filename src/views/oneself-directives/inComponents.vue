<template>
<div class=''>
  <div v-color="color">
    这是组件内的自定义指令
  </div>
  <div v-color:fontWeight="'600'">
    这是组件内的自定义指令
  </div>
</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      color: 'red'
    }
  },
  directives: {
    color: {
      bind(el, binding) {
        if (binding.arg) {
          const key = binding.arg
          el.style[key] = binding.value
        } else {
          el.style.color = binding.value; //color为动态绑定的data中color的值
        }
      }
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
