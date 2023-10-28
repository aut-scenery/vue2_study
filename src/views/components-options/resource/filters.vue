<template>
<div class=''>
   <!-- 我要被过... -->
   <div>{{ msg | setSize }}</div>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      msg: '我要被过滤'
    }
  },
  computed: {},
  filters: {
    setSize(value) {
      if (value.length > 4) {
        return value.slice(0, 4) + "...";
      } else {
        return value;
      }
    },
  },
  watch: {},
  methods: {

  },
  mounted () {

  }
}
</script>
<style lang='scss' scoped>

</style>
