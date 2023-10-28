<template>
<div class=''>
 {{ isServer }}
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      isServer: null,
    }
  },
  computed: {},
  watch: {},
  methods: {

  },
  mounted () {
  this.isServer = this.$isServer
  }
}
</script>
<style lang='scss' scoped>

</style>
