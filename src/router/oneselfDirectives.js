export default {
  path: '/vueOneselfDirectives',
  name: 'VueOneselfDirectives',
  component: () => import('../views/vueOneselfDirectives.vue'),
  children: [
    {
      path: 'inComponents',
      name: 'InComponents',
      component: () => import('../views/oneself-directives/inComponents.vue'),
    },
    {
      path: 'inGlobal',
      name: 'inGlobal',
      component: () => import('../views/oneself-directives/inGlobal.vue'),
    }
  ]
}