<template>
<div class=''>
  <div>{{ a }}</div>
  <div>{{ b }}</div>
  <A style="width: 200px;" :a="a" :b="b" @changeData="changeData" @another="another"></A>
</div>
</template>

<script>
import A from './A.vue'
export default {
  components: {
    A
  },
  data () {
    return {
      a: 'a',
      b: 'b',
    }
  },
  computed: {},
  watch: {},
  methods: {
    changeData(params) {
      this.a = params
    },
    another() {
      alert(2)
    }
  },
  mounted () {

  }
}
</script>
<style lang='scss' scoped>

</style>
