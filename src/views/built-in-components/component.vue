<template>
<div class=''>
  <component :is="'component' + name"></component>
  <button @click="changeComponent">改变组件</button>
</div>
</template>

<script>
import componentA from './componentA.vue';
import componentB from './componentB.vue';
import componentC from './componentC.vue';
export default {
  components: {
    componentA,
    componentB,
    componentC
  },
  data () {
    return {
      name: 'A',
      components:[]
    }
  },
  computed: {},
  watch: {},
  methods: {
    changeComponent () {
      switch (this.name) {
        case 'A':
          this.name = 'B'
          break;
        case 'B':
          this.name = 'C'
          break;
        default:
          this.name = 'A'
          break;
      }
    }
  },
  beforeCreate () {

  },
  mounted () {

  }
}
</script>
<style lang='scss' scoped>

</style>
