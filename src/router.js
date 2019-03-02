import Router from 'vue-router';
import LoginView from './pages/LoginPage.vue';
import HomePage from './pages/HomePage.vue';
import EventMakingView from './pages/EventMakingView.vue';
import ProfilePage from './pages/ProfilePage.vue';
import EventView from './pages/EventView.vue';
import SignUpView from './pages/SignUpView.vue';
import NewHomePage from './pages/NewHomePage.vue';


export const router = new Router({
    mode: 'history',
    routes: [
      { path: '/', component:  NewHomePage},
      { path: '/login', component: LoginView},
      { path: '/signup', component: SignUpView},
      { path: '/event-making', component: EventMakingView},
      { path: '/profile', component: ProfilePage},
      { path: '/event-view', component: EventView},
      { path: '/new-home-page', component: NewHomePage}
    ]
  });