import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import App from './App.vue';
import { routes } from '@/pages/routes';
import { store } from '@/vuex';

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App);

app.use(router);
app.use(store);
app.use(vuetify);
app.mount('#app');