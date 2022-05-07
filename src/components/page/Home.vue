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
      console.log(this.mesa)
    }
  }

}
</script>

<style scoped>

</style>
