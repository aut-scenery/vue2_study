<template>
<div class=''>
  <scopedSlotsChildren :data="arr">
    <div slot="header">slot: header</div>
    <div slot-scope="test">{{ test  }} |  vm.$slots的使用</div>
    <div slot="footer">slot: footer</div>
  </scopedSlotsChildren>
</div>
</template>

<script>
import scopedSlotsChildren from './scopedSlotsChildren.vue';
export default {
  components: {
    scopedSlotsChildren
  },
  data () {
    return {
      arr: ['刘备', '关羽', '张飞']
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
