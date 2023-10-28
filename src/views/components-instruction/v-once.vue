<template>
  <div class='Once'>
    <div class="vOnce">
      <!-- 该指令后面不需要跟任何表达式(比如之前的v-for后面是由跟表达式的) -->
      <!-- 该指令表示元素和组件只渲染一次，不会随着数据的改变而改变。 -->
      <button @click="(() => { message = 'Hello Vue!' })">改变属性</button>
      <div class="have" v-once>
        <p>这是使用了v-once的效果</p>
        <p>{{ message }}</p>
      </div>
      <div class="nohave">
        <p>这是没有使用v-once的效果</p>
        <p>{{ message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      message: 'Hello world!'
    }
  },
  computed: {},
  watch: {},
  methods: {

  },
  mounted() {

  }
}
</script>
<style lang='scss' scoped>
.vOnce {
  width: 800px;
  height: 800px;
}
</style>
