
const routes = [
  {
    path: '/',
    // component: () => import('layouts/MyLayout.vue'),
    component: () => import('layouts/Main.vue'),
    children: [
      // { path: '', component: () => import('pages/Index.vue') }
      { path: '', component: () => import('pages/Watch.vue') }
    ]
  },
  {
    path: '/watch',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('pages/Watch.vue') }
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
