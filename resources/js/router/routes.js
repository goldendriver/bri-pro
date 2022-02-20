function page (path) {
  return () => import(/* webpackChunkName: '' */ `~/pages/${path}`).then(m => m.default || m)
}

export default [
  // English Routes
  { path: '/en', name: 'en', component: page('en/home_en.vue') },
  { path: '/en/product', name: 'products_en', component: page('en/products_en.vue') },
  { path: '/en/product/IAS', name: 'ias_en', component: page('en/ias_en.vue') },
  { path: '/en/product/FlowCal', name: 'flowcal_en', component: page('en/flowcal_en.vue') },
  { path: '/en/catalog', name: 'catalog_en', component: page('en/catalog_en.vue') },
  { path: '/en/purchase', name: 'purchase_en', component: page('en/purchase_en.vue') },
  { path: '/en/carrer', name: 'carrer_en', component: page('en/carrer_en.vue') },
  { path: '/en/contact', name: 'contact_en', component: page('en/contact_en.vue') },
  { path: '/en/dealer', name: 'dealer_en', component: page('en/dealer_en.vue') },

  // Japanese Routes
  { path: '/', name: 'jp', component: page('jp/home_jp.vue') },
  { path: '/product', name: 'products_jp', component: page('jp/products_jp.vue') },
  { path: '/product/IAS', name: 'ias_jp', component: page('jp/ias_jp.vue') },
  { path: '/product/FlowCal', name: 'flowcal_jp', component: page('jp/flowcal_jp.vue') },
  { path: '/catalog', name: 'catalog_jp', component: page('jp/catalog_jp.vue') },
  { path: '/purchase', name: 'purchase_jp', component: page('jp/purchase_jp.vue') },
  { path: '/carrer', name: 'carrer_jp', component: page('jp/carrer_jp.vue') },
  { path: '/contact', name: 'contact_jp', component: page('jp/contact_jp.vue') },
  { path: '/dealer', name: 'dealer_jp', component: page('jp/dealer_jp.vue') },



  // { path: '/', name: 'welcome', component: page('welcome.vue') },

  { path: '/login', name: 'login', component: page('auth/login.vue') },
  { path: '/register', name: 'register', component: page('auth/register.vue') },
  { path: '/password/reset', name: 'password.request', component: page('auth/password/email.vue') },
  { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/reset.vue') },
  { path: '/email/verify/:id', name: 'verification.verify', component: page('auth/verification/verify.vue') },
  { path: '/email/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },

  { path: '/home', name: 'home', component: page('home.vue') },
  {
    path: '/settings',
    component: page('settings/index.vue'),
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: page('settings/profile.vue') },
      { path: 'password', name: 'settings.password', component: page('settings/password.vue') }
    ]
  },

  { path: '*', component: page('errors/404.vue') }
]
