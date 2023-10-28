<template>
<div class=''>
  <slotChildren>
    <template v-slot:default>
      <div>
        这是默认插槽
      </div>
    </template>
    <template v-slot:haveName>
      <div>
        这是具名插槽
      </div>
    </template>
    <template #clearWhite>
      <div>
        这是简写形式
      </div>
    </template>
    <template v-slot:actionScope="data">
      <div>
        {{ data }}
      </div>
    </template>
    <template v-slot:clearWhiteScope="data">
      <div>
        {{ data }}
      </div>
    </template>
  </slotChildren>
</div>
</template>

<script>
import slotChildren from './slotChildren.vue';
export default {
  components: {
   slotChildren
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
