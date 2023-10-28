<template>
<div class=''>
  {{ message }}
  <div class="vCloak">
    <!-- v-cloak：保持和元素实例的关联，直到结束编译后自动消失。 -->
    <!-- v-cloak指令和CSS 规则一起用的时候，能够解决差值表达式闪烁的问题 -->
    <div v-cloak>
      {{ message }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      message: 'Hello, world!'
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
.vCloak {
  width: 800px;
  height: 800px;
}
[v-cloak] {
      display: none;
    }
</style>
