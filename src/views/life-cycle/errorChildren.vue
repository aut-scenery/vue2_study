<template>
<div class=''>
  这是子组件
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      msg: '我是子组件'
    }
  },
  computed: {},
  watch: {},
  methods: {

  },
  mounted () {
    this.getData();
  },
  errorCaptured: (err, vm, info) => {
    // error：Error错误对象
    // vm：发生错误的组件实例，可访问组件属性
    // info：包含错误来源信息的字符串
    console.log('错误捕获', err,vm,info);
    console.log('vm', vm.$data); // vm 指向当前实例
    this.getData(); // 未定义，此处会抛出错误
    return false;
  }
}
</script>
<style lang='scss' scoped>

</style>
