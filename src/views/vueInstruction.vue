<template>
  <div class="about">
    <router-link to="/vueInstruction/vPre">v-pre</router-link>
    <router-link to="/vueInstruction/vCloak">v-cloak</router-link>
    <router-link to="/vueInstruction/vOnce">v-once</router-link>
    <router-link to="/vueInstruction/vSlot">v-slot</router-link>
    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped>
a {
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 600;
  color: black;
}
a:link {
  color: black;
}
a:hover {
  color: yellow;
}
a:active{
  color: red;
}
</style>
