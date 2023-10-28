<template>
<div class='onFather'>
  <div>
    <p>这是父组件</p>
    <p>father message: {{ message }}</p>
  </div>
  <onChildren @onChange="onChange"></onChildren>
</div>
</template>

<script>
import onChildren from './onChildren.vue';
export default {
  components: {
    onChildren
  },
  data () {
    return {
      message: '刘备'
    }
  },
  computed: {},
  watch: {},
  methods: {
    onChange (e) {
      console.log(e)
    }
  },
  mounted () {
  }
}
</script>
<style lang='scss' scoped>

</style>
