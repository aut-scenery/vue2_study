<template>
<div class=''></div>
</template>

<script>
// 优先级Vue.extend > extends > mixins
import extendsTest from './extendsChildren'
export default {
  components: {},
  extends: extendsTest,  // 使用extends
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
