<template>
<div class=''>
  <p>动态绑定style</p>
  <div class="box">
    <div class="item">
      <p>对象语法</p>
      <div :style="{ color: textColor, fontSize: fontSize + 'px' }">
        这是一个div
      </div>
      <button style="color: yellow;" @click="change">改变样式</button>
    </div>
    <div class="item">
       <p>数组语法</p>
       <div :style="[styleColor, styleFontSize]">
          这是另一个div
       </div>
       <button>改变样式</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      textColor: 'red',
      fontSize: 16,
      styleColor: {
        color: 'purple'
      },
      styleFontSize: {
        fontSize: '16px'
      }
    }
  },
  computed: {},
  watch: {},
  methods: {
    change () {
      this.fontSize++
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
</style>
