<template>
<div class=''>
  <children :name="'张三'" :age="18"></children>
</div>
</template>

<script>
import children from './children.vue';
export default {
  components: {
    children
  },
  data () {
    return {
      name: '李四',
      age: 30,
      children: []
    }
  },
  computed: {},
  watch: {},
  methods: {

  },
  mounted () {
   console.log(this.$data)
   console
  }
}
</script>
<style lang='scss' scoped>

</style>
