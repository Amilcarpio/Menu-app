<template>
    <div class="card mt-3">
        <div class="card-body">
          {{produto.name}} {{formatValue(produto.valor)}}
        </div>
        <button @click="$emit('item')" type="button" class="btn mt-2" > Adicionar</button>
      </div> 
</template>

<script>
export default {
    name: 'Produto',
    props: ['produto'],
    emits: ['item'],
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
