<template>
<div class=''>
  <p>{{ one }}</p>
  <injectChildrenTwo></injectChildrenTwo>
</div>
</template>

<script>
import injectChildrenTwo from './injectChildrenTwo.vue';
export default {
  components: {
    injectChildrenTwo
  },
  inject: ['one'],
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
