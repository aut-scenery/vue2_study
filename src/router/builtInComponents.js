export default {
  path: '/vueBuiltInComponents',
  name: 'VueBuiltInComponents',
  component: () => import('../views/vueBuiltInComponents.vue'),
  children: [
    {
      path: 'component',
      name: 'Component',
      component: () => import('../views/built-in-components/component.vue'),
    },
    {
      path: 'transition',
      name: 'Transition',
      component: () => import('../views/built-in-components/transition.vue'),
    },
    {
      path: 'transitionGroup',
      name: 'TransitionGroup',
      component: () => import('../views/built-in-components/transition-group.vue'),
    },
    {
      path: 'keepAlive',
      name: 'KeepAlive',
      component: () => import('../views/built-in-components/keep-alive.vue'),
    },
  ]
}