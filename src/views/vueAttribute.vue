<template>
  <div class='attributeIs'>
    <div>
      <button @click="toshow">点击让子组件显示</button>
      <component :is="which_to_show"></component>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    first: {
      render () {
        return (<div>这里是子组件1</div>)
      }
    },
    second: {
      render () {
        return (<div>这里是子组件2</div>)
      }
    },
    third: {
      render () {
        return (<div>这里是子组件3</div>)
      }
    }
  },
  data () {
    return {
      which_to_show: 'first',
    }
  },
  computed: {},
  watch: {},
  methods: {
    toshow: function () {
      var arr = ['first', 'second', 'third', '']
      var index = arr.indexOf(this.which_to_show)
      if (index < 3) {
        this.which_to_show = arr[index + 1]
      } else {
        this.which_to_show = arr[0]
      }
    }
  },
  mounted () {

  }
}
</script>
<style lang='scss' scoped>
a {
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 600;
  color: black;
}
.attributeIs {
  width: 800px;
  height: 800px;
  display: flex;
  div {
    width: 400px;
  }
}
</style>
