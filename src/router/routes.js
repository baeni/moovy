const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },

      { path: 'discover/movie/:discoverQuery', component: () => import('pages/SearchPage.vue') },

      { path: 'search/movie/:searchQuery', component: () => import('pages/SearchPage.vue') },
      { path: 'details/movie/:id', component: () => import('pages/DetailsPage.vue') },

      { path: ':catchAll(.*)*', component: () => import('pages/Error404Page.vue') }
    ]
  }
]

export default routes
