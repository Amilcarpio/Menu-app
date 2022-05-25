/* eslint-disable */
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Cardapio from './components/page/Cardapio'
import Home from './components/page/Home'
import Login from './components/page/Login'

const axios = require('axios').default;


const routes = [
  { path: '/', component: Home },
  { path: '/cardapio', component: Cardapio },
  { path: '/login', component: Login},
]

const router =  createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
  })

const app = createApp(App)
app.use(router)
app.mount('#app')

