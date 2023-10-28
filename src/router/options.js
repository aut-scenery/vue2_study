export default {
  path: '/vueOptions',
  name: 'VueOptions',
  component: () => import('../views/vueOptions.vue'),
  children: [
    {
      path: 'comments',
      name: 'Comments',
      component: () => import('../views/components-options/others/comments.vue'),
    },
    {
      path: 'inheritAttrs',
      name: 'InheritAttrs',
      component: () => import('../views/components-options/others/inheritAttrs.vue'),
    },
    {
      path: 'model',
      name: 'Model',
      component: () => import('../views/components-options/others/model.vue'),
    },
    {
      path: 'functional',
      name: 'Functional',
      component: () => import('../views/components-options/others/functional.vue'),
    },
    {
      path: 'delimiters',
      name: 'Delimiters',
      component: () => import('../views/components-options/others/delimiters.vue'),
    },
    {
      path: 'provideAndInject',
      name: 'ProvideAndInject',
      component: () => import('../views/components-options/assemble/provideAndInject.vue'),
    },
    {
      path: 'extends',
      name: 'Extends',
      component: () => import('../views/components-options/assemble/extends.vue'),
    },
    {
      path: 'resource',
      name: 'Resource',
      component: () => import('../views/components-options/resource/index.vue'),
      children: [
        {
          path: 'filters',
          name: 'Filters',
          component: () => import('../views/components-options/resource/filters.vue'),
        },
        {
          path: 'directives',
          name: 'Directives',
          component: () => import('../views/components-options/resource/directives.vue'),
        },
      ]
    },
    {
      path: 'DOM',
      name: 'DOM',
      component: () => import('../views/components-options/DOM/index.vue'),
      children: [
        {
          path: 'el',
          name: 'El',
          component: () => import('../views/components-options/DOM/el.vue'),
        },
        {
          path: 'renderError',
          name: 'RenderError',
          component: () => import('../views/components-options/DOM/renderError.js'),
        },
      ]
    },
    {
      path: 'optionsData',
      name: 'OptionsData',
      component: () => import('../views/components-options/data/index.vue'),
      children: [
        {
          path: 'propsData',
          name: 'PropsData',
          component: () => import('../views/components-options/data/propsData.vue')
        }
      ]
    }
  ]
}