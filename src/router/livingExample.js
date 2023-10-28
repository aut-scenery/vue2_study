export default {
  path: '/vueLivingExample',
  name: 'VueLivingExample',
  component: () => import('../views/vueLivingExample.vue'),
  children: [{
    path: 'reloadView',
    name: 'ReloadView',
    component: () => import('../views/components-livingExample/reloadView.vue'),
  },
  {
    path: 'nextTick',
    name: 'nextTick',
    component: () => import('../views/components-livingExample/nextTick.vue'),
  },
  {
    path: 'destroy',
    name: 'Destroy',
    component: () => import('../views/components-livingExample/destroy.vue'),
  },
  {
    path: 'onFather',
    name: 'onFather',
    component: () => import('../views/components-livingExample/events/onFather.vue'),
  },
  {
    path: 'data',
    name: 'Data',
    component: () => import('../views/components-livingExample/data/index.vue'),
    children: [
    {
      path: '$watch',
      name: 'Watch',
      component: () => import('../views/components-livingExample/data/watch.vue')
    },
    {
      path: '$delete',
      name: 'Delete',
      component: () => import('../views/components-livingExample/data/delete.vue')
    }
  ]
  },
  {
    path: 'property',
    name: 'Property',
    component: () => import('../views/components-livingExample/property/index.vue'),
    children: [
      {
        path: '$listenersAnd$attrs',
        name: '$listenersAnd$attrs',
        component: () => import('../views/components-livingExample/property/listenersAndattrs.vue')
      },
      {
        path: '$isServer',
        name: '$isServer',
        component: () => import('../views/components-livingExample/property/isServer.vue')
      },
      {
        path: '$slots',
        name: '$slots',
        component: () => import('../views/components-livingExample/property/slots.vue')
      },
      {
        path: '$scopedSlots',
        name: '$scopedSlots',
        component: () => import('../views/components-livingExample/property/scopedSlots.vue')
      },
      {
        path: 'options',
        name: 'Options',
        component: () => import('../views/components-livingExample/property/options.vue')
      },
      {
        path: 'elAndRoot',
        name: 'ElAndRoot',
        component: () => import('../views/components-livingExample/property/elAndRoot.vue')
      },
      {
        path: 'propsAndData',
        name: 'PropsAndData',
        component: () => import('../views/components-livingExample/property/propsAndData.vue')
      },
    ]
  }
]
}