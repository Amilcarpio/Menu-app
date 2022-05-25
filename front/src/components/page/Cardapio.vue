<template>
  <div class="hello">
    <h2>Cardapio do Amil-Ca </h2>
    <MenuCategoria />
    <div v-for="i in itens" :key="i.id">
    <Produto :produto="i"  />
    </div>
  </div>
</template>

<script>
import Checkout from "./Checkout.vue"
import MenuCategoria from "./MenuCategoria.vue"
import Produto from "./Produto.vue"
const axios = require('axios').default;
export default {
  name: 'Cardapio',
  components: {
    Checkout,
    MenuCategoria,
    Produto
  },
  props: {
    msg: String
  },

  data() {
      return {
        mesa: "",
        itens: [],
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
        }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
