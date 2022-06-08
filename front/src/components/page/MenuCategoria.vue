<template>
    <nav class="navbar navbar-light bg-light">
    <button @click="$emit('adicionar')" class="navbar-brand" v-for="categoria in categorias" :key="categoria.id">
    {{ categoria.name }}</button>
    </nav>
</template>

<script>
const axios = require('axios').default;
export default {
    name: 'MenuCategoria',
    emits: ['adicionar'],
    data(){
        return {
            categorias:[]
        }
    },

    mounted(){
        this.criarCategorias()
    },

    methods: {
        criarCategorias(){
            let local = this
            axios.get('https://amilcafood.codelsoftware.com.br/api/categoria')
            .then(function (response) {
                // handle success
                local.categorias = response.data
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        }
    },
}
</script>
