<template>
  <div class="text-start">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="logo">
        <a class="navbar-brand" href="#"> 
          <img src="./../../assets/logo.png" alt="logo" width="70" height="70">  
        </a>
        <p class="logoName">
          AMILFOOD
        </p>
      </div>
    </nav>
  <div>
      <!-- <div class="lugar mt-3 py-2" v-for="i in restaurante" :key="i.id">
      Estabelecimento: {{i.a}}
      </div> -->

      <!-- <table class="table table-striped mt-3" v-on:input='choice = $event.target'>

        <thead class="menu" @click="menu()" v-for="i in produto" :key="i.id">
          <th class="choice">{{i.e}}</th>
          <th class="choice">{{i.p}}</th>
          <th class="choice">{{i.r}}</th>
          <th class="choice">{{i.s}}</th>
          <th class="choice">{{i.b}}</th>
        </thead>
       
      </table> -->
      <main>
      <MenuCategoria/>
      <section>
        <div class="row p-1" v-for="i in itens" :key="i.id">
          <div class="corpo">
            <Produto :produto="i" />
            <button class="cal" @click="down(i)"> - </button>
            <p class="cal"> {{(i.counter > 0 ? i.counter : 0)}} </p>
            <button class="cal" @click="up(i)"> + </button>
            <button class="col add btn" @click="addCar"> Adicionar </button>
          </div>
        </div> 
      </section>
    </main>
    </div>

      <div class="d-flex align-item-center justify-content-between" v-for="i in menuBarra" :key="i.id">
        <nav class="rodape navbar fixed-bottom p-3" @click="barra(i)">
            <i class="bi bi-house"> {{ i.ca }} </i>
            <i class="bi bi-receipt">  {{ i.co }} </i>
            <i class="bi bi-clock">  {{ i.chG }} </i>
            <i class="bi bi-person">  {{ i.p }}</i>
        </nav>
      </div>
  </div>

</template>

<script>
import MenuCategoria from './MenuCategoria.vue'
import Produto from './Produto.vue'
import Pedido from './Pedido.vue'

const axios = require('axios').default;

export default {
  name: 'Cardapio',
  components: {
    MenuCategoria,
    Produto,
    Pedido,
  },
  props: ["categoria", "produto", "pedido"],

  data() {
    return {
      mesa: "",
        restaurante: [],
        itens: [],
        cart: [],
        menuBarra: {
          ca: 'Cardápio', 
          co: 'Conta', 
          chG: 'Chamar Garçom', 
          p: 'Perfil'
          }
    }
  },
  mounted() {
    this.buscarProdutos()
  },
  methods: {
    buscarProdutos(){
      let local = this
      axios.get('https://amilcafood.codelsoftware.com.br/api/produto')
      .then(function (response) {
        // handle success
        local.itens = response.data
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    },

    up(i){
      //verificar se existe o item dentro do cart
      // se existir, verificar qnts e + 1
      // se nao existir, criar um novo com a quantidade 1
      let item = this.cart.find(function(item){
        return item.id == i.id
        })
        if(item == undefined){
          let novoItem = i
          novoItem.counter = 1
          this.cart.push(novoItem)
        } else {
          item.counter = item.counter+1
        }
    },
    down(i){
      if(i.counter > 0){
        i.counter -= 1
      }
    },
    addCar() {
      window.location.href = "/pedido"
    },
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'KoHo', sans-serif;
}

.navbar {
  height: 20%;
  background: #FCE83A;
}

img {
  clip-path: circle();
  margin-left: 2rem;
}

.logo {
  display: flex;
}

.logoName{
  text-align: center;
  margin-top: 15%;
  font-family: 'Fredoka One', cursive;
  color: #986616;
}

.cal {
  background: transparent;
  border: none;
  font-weight: 400;
}

.add.btn {
  background: #FCE83A;
  color: black;
  font-weight: 200;
  border-radius: 0.5rem;
  border: 1px solid rgb(218, 218, 72);
  
}

.add:hover {
  font-weight: 400;
  cursor: pointer;
}

.corpo {
  border: 0.5px solid #B1B1B1;
  border-radius: 0.5rem;
  display: flex;
  text-align: center;
  padding: 0.2rem;
}

.corpo, .cal {
  font-weight: 200;
  color: rgb(62, 61, 61);
  margin-right: 1rem;
}

.rodape {
  background: #FCE83A;
  color: #B1B1B1;
  font-weight: 300;
  height: 10%;
}

.bi:hover {
  color: black;
  cursor: pointer;
}

</style>
