import Vue from 'vue';
const res = Vue.compile('<div><span>{{ msg }}</span></div>');
export default {
   data () {
    return {
      msg: '我是通过compile解析渲染的'
    }
   },
   created () {
    console.log(res);
   },
   render: res.render,
   staticRenderFns: res.staticRenderFns
}