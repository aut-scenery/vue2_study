import Vue from "vue"
Vue.directive("color",{
    bind(el, binding) {
    	if (binding.arg) {
        const key = binding.arg
        el.style[key] = binding.value
      } else {
        el.style.color = binding.value; //color为动态绑定的data中color的值
      }
    }
})