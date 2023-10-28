<template>
<div class=''>
  <p>{ msg }</p>
</div>
</template>

<script>
export default {
  delimiters: ['{', '}'], // 改变差值表达式风格
  components: {},
  data () {
    return {
      msg: '这是一个段落'
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
