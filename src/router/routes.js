const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },

      { path: 'search/:query', component: () => import('pages/SearchPage.vue'), props: route => ({ query: route.params.query }) },
      { path: 'details/:id', component: () => import('pages/DetailsPage.vue'), props: route => ({ id: route.params.id }) },

      { path: 'auth', component: () => import('pages/AuthPage'), meta: { onlyNonAuth: true }  },
      { path: 'my-list', component: () => import('pages/MyListPage.vue'), meta: { onlyAuth: true } },

      { path: ':catchAll(.*)*', component: () => import('pages/Error404Page.vue') }
    ]
  }
]

export default routes
