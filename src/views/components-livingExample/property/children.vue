<template>
<div class=''></div>
</template>

<script>
export default {
  components: {},
  props: {
   name: {
    type: String,
    require: false,
   },
   age: {
    type: Number,
    require: false,
   }
  },
  data () {
    return {

    }
  },
  computed: {},
  watch: {},
  methods: {

  },
  mounted () {
   console.log(this.$props)
  }
}
</script>
<style lang='scss' scoped>

</style>
