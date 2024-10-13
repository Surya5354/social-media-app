import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Post.vue';
import Login from '../components/Login.vue';
import Profile from '../components/Profile.vue';
import Notifications from '../components/Notifications.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/notifications', name: 'Notifications', component: Notifications },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
