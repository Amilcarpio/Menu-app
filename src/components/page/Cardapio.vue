<template>
  <div class="hello">
    <h2>Cardapio do Amil-Ca </h2>
    <div v-for="i in item" :key="i.id">
      <div class="card mt-3">
        <div class="card-body">
          {{i.name}} {{i.value}}<br>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data() {
      return {
        mesa: "",
        item: [
          {name: 'Cerveja', value: 10.0},
          {name: 'Agua', value: 5.0},
          {name: 'Batata frita', value: 10.0},
          {name: 'Espetinho', value: 10.0},
          {name: 'Polenta Frita', value: 15.0},
          {name: 'Pastel', value: 8.0},
        ],
      }
  },
  mounted() {
      
  },
  methods: {
    
    
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
