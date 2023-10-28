export default {
  path: '/vueAttribute',
  name: 'VueAttribute',
  component: () => import('../views/vueAttribute.vue'),
  children: [
    {
      path: 'isAttribute',
      name: ' IsAttribute',
      component: () => import('../views/components-attribute/isAttribute.vue'),
    }
  ]
}