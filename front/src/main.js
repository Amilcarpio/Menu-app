/* eslint-disable */
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Cardapio from './components/page/Cardapio'
import Home from './components/page/Home'


const routes = [
  { path: '/', component: Home },
  { path: '/cardapio', component: Cardapio },
]

const router =  createRouter({
    history: createWebHistory(),
    routes,
  })

const app = createApp(App)
app.use(router)
app.mount('#app')

