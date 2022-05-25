<template>
    <div class="card mt-3">
        <div class="card-body">
          {{produto.name}} {{formatValue(produto.valor)}}<br>
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
