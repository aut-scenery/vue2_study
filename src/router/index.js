import Vue from 'vue'
import VueRouter from 'vue-router'
import instruction from './instruction'
import attribute from './attribute'
import livingExample from './livingExample'
import oneselfDirectives from './oneselfDirectives'
import options from './options'
import builtInComponents from './builtInComponents'
import dynamicClassAndStyle from './dynamicClassAndStyle'
import lifeCycle from './lifeCycle'
import globalApi from './globalApi'
import myself from './myself'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Jsx',
    name: 'Jsx',
    component: () => import('../views/Jsx.vue')
  },
  instruction,
  attribute,
  livingExample,
  oneselfDirectives,
  options,
  builtInComponents,
  dynamicClassAndStyle,
  lifeCycle,
  myself,
  globalApi
]

const router = new VueRouter({
  routes
})

export default router
