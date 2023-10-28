<template>
  <div class=''>
    <button @click="change">改变</button>
    <div ref="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      message: '张三'
    }
  },
  computed: {},
  watch: {},
  methods: {
    change() {
      this.message = '李四'
      // 值还没有改变
      console.log(this.$refs.message.innerText)
      this.$nextTick(()=> {
        // 值已经改变
        console.log(this.$refs.message.innerText)
      })
    }
  },
  mounted() {

  }
}
</script>
<style lang='scss' scoped></style>
