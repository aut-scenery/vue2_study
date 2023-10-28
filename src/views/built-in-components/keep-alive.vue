<template>
<div class=''>
  <button @click="view = (view === 'A' ? 'B' : 'A')">开始动画</button>
  <transition name="slide-fade"> 
    <keep-alive> 
        <component :is="'component' + view"></component> 
    </keep-alive> 
</transition>
</div>
</template>

<script>
import componentA from './componentA.vue';
import componentB from './componentB.vue';
export default {
  components: {
    componentA,
    componentB,
  },
  data () {
    return {
      view: 'A'
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
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
