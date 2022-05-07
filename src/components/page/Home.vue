<template>
  <div class="hello">
     <h1> Home do Amilca</h1>

      <label>Mesa</label>
      <input class="" v-model="mesa">
      <br>
      <br>
      <div @click="openCardapio" class="card">
        <div class="card-body">
          Ir para o Cardapio
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
      return {
        mesa: "",
      }
  },
  mounted() {
      
  },
  methods: {
    openCardapio(){
      if(this.mesa == ""){
        alert('digite o número da mesa')
      }else {
        window.location.href = "/cardapio"
      }

      console.log(this.mesa)
    }
  }

}
</script>

<style scoped>

</style>
