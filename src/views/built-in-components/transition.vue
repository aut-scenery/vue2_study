<template>
<div class='box'>
  <div class="box1">
    <p>v-if 形式</p>
    <button @click="show = !show">开始动画</button>
    <transition name="slide-fade">
      <p v-if="show"> hello world </p>
    </transition>
  </div>
  <div class="box2">
    <p>在不同组件中切换过渡</p>
    <button @click="view = (view === 'A' ? 'B' : 'A')">开始动画</button>
    <transition name="component-fade" mode="out-in">
     <component :is="'component' + view"></component>
    </transition>
  </div>
  <div class="box3">
    <p>通过js实现过渡</p>
    <button @click="show1 = !show1">开始动画</button>
    <!-- 元素添加 v-bind:css="false"，Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响。 -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false"
    >
    <p v-if="show1" style="width: 200px;height: 80;background-color: rgba(179, 244, 188, 0.3);">
      这是通过js实现过渡的元素
    </p>
  </transition>
  </div>
  <div class="box4">
    <!-- appear 自定义 CSS 类名 --> 
      <transition appear
              appear-class="custom-appear-class"
              appear-active-class="custom-appear-active-class"
              appear-to-class="custom-appear-to-class">
        <p>我是一段测试appear初始渲染文字</p>
      </transition>
    </div>
</div>
</template>

<script>
import loadJs from '@/units/loadJs';
import componentA from './componentA.vue';
import componentB from './componentB.vue';
export default {
  components: {
    componentA,
    componentB,
  },
  data () {
    return {
      show: true,
      view: 'A',
      show1: true,
    }
  },
  computed: {},
  watch: {},
  methods: {
    // 钩子函数里写具体的过渡数据，可以实现js动态控制
    beforeEnter: function (el) {
      el.style.opacity = 0
      el.style.transformOrigin = 'left'
    },
    enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
    }
  },
  mounted () {
    loadJs('https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js')
      .then(() => {
        console.log('加载成功!')
      })
      .catch(() => {
        console.log('加载失败!')
      })
  }
}
</script>
<style lang="scss" scoped>
.box {
  border: 1px solid red;
  div {
    border-bottom: 1px solid red;
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
</style>
<style lang='scss' scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
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
.component-fade-enter-active {
  transition: all .5s ease;
}
.component-fade-leave-active {
  transition: all .5s ease;
}
.component-fade, .component-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.custom-appear-class{
  opacity: 0;
}
.custom-appear-active-class{
  transition: all 3s;
}
.custom-appear-to-class{
  opacity: 1;
}

</style>
