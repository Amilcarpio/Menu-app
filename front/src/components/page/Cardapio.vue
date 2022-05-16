<template>
  <div class="text-start">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div>
        <a class="navbar-brand" href="#"> MEU <span class="menu-title">MENU</span></a>
      </div>
    </nav>
  <div class="container">
    <main >
      <div class="lugar mt-3 py-2" v-for="i in restaurante" :key="i.id">
      Estabelecimento: {{i.a}}
      </div>
      <table  class="table table-striped mt-3">
        <thead class="thead" v-for="i in option" :key="i.id">
          <th class="choice">{{i.e}}</th>
          <th class="choice">{{i.p}}</th>
          <th class="choice">{{i.r}}</th>
          <th class="choice">{{i.s}}</th>
          <th class="choice">{{i.b}}</th>
        </thead>
        <!-- <tbody>
          <div v-for="i in item" :key="i.id">
            {{i.name}} - R${{i.value}}<br>
          </div>
        </tbody> -->
      </table>
      <section>
        <div class="card mt-2 mb-2" v-for="i in item" :key="i.id">
            <div class="card-body d-flex justify-content-between">
              <p class="item-card d-flex"> {{i.name}} - R${{i.value}}</p>
              <button class="cal" @click="down(i)"> - </button>  
              <p class="cal"> {{i.counter}} </p>
              <button class="cal" @click="up(i)"> + </button>
              <button class="add btn" @click="add(i)"> Adicionar </button>  
          </div> 
        </div>
      </section>
        
    </main>
    </div>
    
      <div class="rodape d-flex align-item-center justify-content-between">
        <nav class="navbar fixed-bottom p-3">
            <i class="bi bi-house">  Cardápio </i>
            <i class="bi bi-receipt">  Conta </i>
            <i class="bi bi-clock">  Chamar Garçom</i>
            <i class="bi bi-person">  Perfil</i>
        </nav>
      
    </div>
  </div>

</template>

<script>
export default {
  name: 'Cardapio',
  props: {
    msg: String
  },

  data() {
      return {
        mesa: "",
        restaurante: [{
          a: 'opcao 1',
          b: 'opcao 2',
          c: 'opcao 3',
        }],
        option: [{
          e: 'Entradas', p: 'Porções', r: 'Refeições', s: 'Sobremessa', b: 'Bebidas'}],
        item: [
          {name: 'Cerveja', value: '10.00', counter: 0},
          {name: 'Agua', value: '5.00', counter: 0},
          {name: 'Batata frita', value: '10.00', counter: 0},
          {name: 'Espetinho', value: '10.00', counter: 0},
          {name: 'Polenta Frita', value: '15.00', counter: 0},
          {name: 'Pastel', value: '8.00', counter: 0},
        ],
        addCar:[]
      }
  },
  mounted() {
  },
  methods: {
    up(i){
      i.counter += 1
    },
    down(i){
      if(i.counter > 0){
        i.counter -= 1
      }
    },
    add(i) {
    if(i.counter >= 1) {
      addCar = i.counter
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'KoHo', sans-serif;
}
body::before{
  display: block;
  content: '';
  height: 60px;
}

.navbar {
  height: 10%;
  background: #FCE83A;;
  padding: 1rem;
  position: fixed;
} 

.navbar-brand {
  color: #B1B1B1;
  font-weight: 500;
}

.menu-title {
  color: white;
  font-weight: 600;
}

.lugar {
  font-weight: 500;
  color: #B1B1B1;
}

.thead {
  margin-right: 1rem;
}

.choice {
  font-weight: 500;
  color: black;
}

.choice:hover {
  color: #FCE83A;
  cursor: pointer;
  
}

.cal {
  padding: 0.5rem;
  background: transparent;
  border: none;
  font-weight: 400;
}

.add {
  background: #FCE83A;
  color: #B1B1B1;
  border-radius: 0.5rem;
  border: 2px solid #B1B1B1;
  width: 20%;
} 

.item-card{
  padding: 0.5rem;
  font-weight: 300;
  color: #B1B1B1;
  margin-right: 1rem;
}

.card-body {
  padding: 0.5rem;
  font-weight: 300;
  color: #B1B1B1;
} 

.rodape {
  background: #FCE83A;
  color: #B1B1B1;
  font-weight: 300;
  height: 10%;
}

.rodape::before {
  display: block;
  height: 57px;
  content: '';
}

.bi:hover {
  color: black;
  cursor: pointer;
}

</style>
