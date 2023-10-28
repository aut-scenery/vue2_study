<template>
<div class='transitionGroup'>
  <!-- 设置tag属性为p元素，v-for中的每一项设置key值 -->
  <transition-group name="list" tag="p" class="list-item">
    <span v-for="item in items" :key="item">
      {{ item }}
    </span>
  </transition-group>
  <div class="handlerClick">
    <button @click="items.push(items[items.length - 1] + 1)">添加元素</button>
    <button @click="items.pop()">移除元素</button>
  </div>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      items: [1, 2, 3, 4, 5, 6],
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
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.handlerClick {
  button {
    margin-left: 20px;
  }
}
</style>
