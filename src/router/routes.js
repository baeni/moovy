const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },

      { path: 'search/:query', component: () => import('pages/SearchPage.vue'), props: route => ({ query: route.params.query }) },
      { path: 'details/:id', component: () => import('pages/DetailsPage.vue'), props: route => ({ id: route.params.id }) },

      { path: 'auth', component: () => import('pages/AuthPage'), meta: { onlyNonAuth: true }  },
      { path: 'watchlist', component: () => import('pages/WatchlistPage.vue'), meta: { onlyAuth: true } },
      { path: 'favorites', component: () => import('pages/FavoritesPage.vue'), meta: { onlyAuth: true } },

      { path: 'terms-of-service', component: () => import('pages/TermsOfServicePage.vue') },
      { path: 'privacy-policy', component: () => import('pages/PrivacyPolicyPage.vue') },
      { path: 'imprint', component: () => import('pages/TermsOfServicePage.vue') },

      { path: ':catchAll(.*)*', component: () => import('pages/Error404Page.vue') }
    ]
  }
]

export default routes
