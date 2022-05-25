<template>
  <div id="app">
      <router-view>
        
      </router-view>
</div>
</template>

<script>
import Home from './components/page/Home.vue'
import Cardapio from "./components/page/Cardapio.vue"
import Checkout from "./components/page/Checkout.vue"
import Login from "./components/page/Login.vue"
import MenuCategoria from "./components/page/MenuCategoria.vue"

export default {
  name: 'App',
  components: {
    Home,
    Cardapio,
    Checkout,
    Login,
    MenuCategoria,
    
  },

  data() {
      return {
      }
  },
  mounted() {
      
  },
  methods: {
  
  }

}
</script>

<style>
#app {
  font-family: 'KoHo', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
