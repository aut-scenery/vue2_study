export default {
  path: '/vueInstruction',
  name: 'VueInstruction',
  component: () => import('../views/vueInstruction.vue'),
  children: [
    {
      path: 'vPre',
      name: 'vPre',
      component: () => import('../views/components-instruction/v-pre.vue'),
    },
    {
      path: 'vCloak',
      name: 'vCloak',
      component: () => import('../views/components-instruction/v-cloak.vue'),
    },
    {
      path: 'vOnce',
      name: 'vOnce',
      component: () => import('../views/components-instruction/v-once.vue'),
    },
    {
      path: 'vSlot',
      name: 'vSlot',
      component: () => import('../views/components-instruction/v-slot.vue'),
    },
  ]
}