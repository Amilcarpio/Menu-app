/* eslint-disable */
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Cardapio from './components/page/Cardapio'
import Home from './components/page/Home'
import Pedido from './components/page/Pedido.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/cardapio', component: Cardapio },
  { path: '/Pedido', component: Pedido}
]

const router =  createRouter({
    history: createWebHistory(),
    routes,
  })

const app = createApp(App)
app.use(router)
app.mount('#app')

