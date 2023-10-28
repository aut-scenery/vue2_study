<template>
<div class=''>
  <modelChildren v-model="name"></modelChildren>
</div>
</template>

<script>
import modelChildren from './modelChildren.vue';
export default {
  components: {
    modelChildren
  },
  data () {
    return {
      name: '张三'
    }
  },
  computed: {},
  watch: {
    name (newVal, oldVal) {
      console.log(newVal);
      console.log(oldVal);
    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>
<style lang='scss' scoped>

</style>
