<template>
<div class=''>
  <propsChildren></propsChildren>
</div>
</template>

<script>
import propsChildren from './propsChildren.vue';
export default {
  components: {
    propsChildren
  },
  // 只有 new 时才能使用
  // propsData: {
  //   msg: '这是通过propsData传递的数据'
  // },
  data () {
    return {

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

</style>
