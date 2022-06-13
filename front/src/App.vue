<template>
  <div id="app">
    <router-view>
     
    </router-view>
  </div>
</template>

<script>
import Home from './components/page/Home.vue'
import Cardapio from './components/page/Cardapio'
import MenuCategoria from './components/page/MenuCategoria.vue'
import Pedido from './components/page/Pedido.vue'

export default {
  name: 'App',
  components: {
    Home,
    Cardapio,
    MenuCategoria,
    Pedido
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
  margin-top: 20%;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
