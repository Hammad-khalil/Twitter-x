
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/PageHome.vue'),name:'Home' },
      { path: '/about', component: () => import('src/pages/PageAbout.vue'),name:'About' },
      { path: '/notifications', component: () => import('src/pages/NotificationsPage.vue'),name:'Notifications' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
