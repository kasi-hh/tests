
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
        {path:'layout', component:() => import('pages/Layout.vue')},
        {path:'forms', component:() => import('pages/Forms.vue')},
        {path:'dhtmlx', component:() => import('pages/Dhtmlx.vue')},
        {path:'test-tool', component:() => import('pages/TestTool.vue')},
        {path:'mite', component:() => import('pages/Mite.vue')},
        {path:'cards', component:() => import('pages/TestCards.vue')},
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
