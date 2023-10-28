<template>
<div class=''>
  <p>动态绑定class</p>
  <div class="box">
    <div class="item">
      <p>对象语法</p>
      <div :class="{ isBold: isBold, 'text-color': haveColor }">
        这是一个div
      </div>
      <button @click="change">改变样式</button>
    </div>
    <div class="item">
       <p>数组语法</p>
       <div :class="['isBold', haveColor1 ? 'text-gold' : '']">
          这是另一个div
       </div>
       <button @click="haveColor1 = !haveColor1">改变样式</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      isBold: true,
      haveColor: true,
      haveColor1: true
    }
  },
  computed: {},
  watch: {},
  methods: {
    change () {
      this.isBold = !this.isBold
      this.haveColor = !this.haveColor
    }
  },
  mounted () {

  }
}
</script>
<style lang='scss' scoped>
.box {
  display: flex;
  .item {
    width: 300px;
    height: 400px;
    border: 1px solid red;
  }
}
.isBold {
  font-weight: bold;
}
.text-color {
  color: green;
}
.text-gold {
  color: gold;
}
</style>
