<template>
<div class=''>
  <button @click='$listeners.changeData("gg")'>改变数组B</button>
  <button @click='handleOther'>其他B</button>
</div>
</template>

<script>
export default {
  name: 'B',
  components: {},
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {
    handleOther() {
      this.$listeners.another()
    }
  },
  mounted () {
    console.log('this.$attrsB', this.$attrs)
    console.log('this.$listenersA', this.$listeners)
  }
}
</script>
<style lang='scss' scoped>

</style>
