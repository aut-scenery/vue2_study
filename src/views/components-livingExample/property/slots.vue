<template>
<div class=''>
  <slotsChildren>
    <div slot="header">slot: header</div>
    <div>slot: default</div>
    <div slot="footer">slot: footer</div>
  </slotsChildren>
</div>
</template>

<script>
import slotsChildren from './slotsChildren.vue';
export default {
  components: {
    slotsChildren
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

  }
}
</script>
<style lang='scss' scoped>

</style>
