export default {
  path: '/globalApi',
  name: 'GlobalApi',
  component: () => import('../views/vueGlobalApi.vue'),
  children: [
    {
      path: 'version',
      name: 'Version',
      component: () => import('../views/global-api/version.vue'),
    },
    {
      path: 'observable',
      name: 'Observable',
      component: () => import('../views/global-api/observable.js'),
    },
    {
      path: 'compile',
      name: 'Compile',
      component: () => import('../views/global-api/compile.js'),
    }
  ]
}