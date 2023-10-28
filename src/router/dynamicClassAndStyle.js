export default {
  path: '/dynamicClassAndStyle',
  name: 'DynamicClassAndStyle',
  component: () => import('../views/vueDynamicCalssAndStyle.vue'),
  children: [
    {
      path: 'class',
      name: 'Class',
      component: () => import('../views/dynamic-calss-and-style/class.vue'),
    },
    {
      path: 'style',
      name: 'Style',
      component: () => import('../views/dynamic-calss-and-style/style.vue'),
    },
  ]
}