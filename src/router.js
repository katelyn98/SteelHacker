import Router from 'vue-router';

import SignupView from './pages/SignUpView.vue';
import LoginView from './pages/LoginPage.vue';
import HomePage from './pages/HomePage.vue';

export const router = new Router({
    mode: 'history',
    routes: [
      { path: '/', component:  HomePage},
      { path: '/login', component: LoginView},
      { path: '/signup', component: SignupView},
    ]
  });