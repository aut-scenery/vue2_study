<template>
  <div class='LivingExample'>
    <div class="bus">
      <button @click="four">不会更新视图的切换</button>
      <button @click="five">将视图变为王五</button>
      <button @click="six">将视图变为老六</button>
    </div>
    <div>{{ userInfo }}</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userInfo: {
        name: '张三'
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    four() {
      this.userInfo.age = '李四'
    },
    five() {
      this.$set(this.userInfo, 'age', '王五')
      // this.$forceUpdate()
    },
    six() {
      this.userInfo.age = '老六'
      // 强制页面刷新
      this.$forceUpdate()
    }
  },
  mounted() {

  }
}
</script>
<style lang='scss' scoped>
.bus {
  display: flex;

  button {
    padding: 10px;
  }
}
</style>
