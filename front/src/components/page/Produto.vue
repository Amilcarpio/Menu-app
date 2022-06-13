<template>
    <div class="col mt-3">
        <div class="col-body produto">
          <b>{{produto.name}}</b>
            <div> {{formatValue(produto.valor)}} 
            </div>
          <br>
        </div>
      </div> 
</template>

<script>
export default {
    name: 'Produto',
    props: ['produto'],
    data(){
        return {
            
        }
    },
    methods: {
      formatValue(value){
        return "R$ " + (value/100)
      }
    },
}
</script>

<style>
.produto {
  text-align: left;
  font-family: 'KoHo', sans-serif;
  font-weight: 300;
  display: flex;
  justify-content: space-between;
  margin-left: 1rem;
}
</style>
