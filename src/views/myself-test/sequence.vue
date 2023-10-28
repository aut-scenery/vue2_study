<template>
<div class=''>
  <p>这是extend、extends、mixin、mixins执行顺序的对比</p>
</div>
</template>

<script>
import Vue from 'vue';
Vue.extend({
  created () {
    console.log('extend执行了')
  }
})
Vue.mixin({
  created () {
    console.log('mixin执行了')
  }
});
export default {
  components: {},
  extends: {
    created () {
      console.log('extends执行了')
    }
  },
  mixins: [{
    created () {
      console.log('mixins执行了');
    }
  }],
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
