export default {
  path: '/lifeCycle',
  name: 'LifeCycle',
  component: () => import('../views/vueLifeCycle.vue'),
  children: [
    {
      path: 'errorCaptured',
      name: 'ErrorCaptured',
      component: () => import('../views/life-cycle/errorCaptured.vue'),
    }
  ]
}