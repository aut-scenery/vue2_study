export default {
  path: '/myself',
  name: 'Myself',
  component: () => import('../views/vueMyself.vue'),
  children: [
    {
      path: 'sequence',
      name: 'Sequence',
      component: () => import('../views/myself-test/sequence.vue'),
    }
  ]
}