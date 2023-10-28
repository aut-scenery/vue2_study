<template>
<div class=''>
  <div>这是父组件</div>
  <errorChildren></errorChildren>
</div>
</template>

<script>
import errorChildren from './errorChildren.vue';
export default {
  components: {
    errorChildren
  },
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {

  },
  mounted () {
    
  },
  errorCaptured: (err, vm, info) => {
    // error：Error错误对象
    // vm：发生错误的组件实例，可访问组件属性
    // info：包含错误来源信息的字符串
    console.log('错误捕获', err,vm,info);
    console.log('vm', vm.$data); // vm 指向当前实例
    return false;
  }
}
</script>
<style lang='scss' scoped>

</style>
