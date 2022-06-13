<template>
    <nav class="menuCategoria navbar navbar-light bg-light">
        <a class="navbar-brand" v-for="categoria in categorias" :key='categoria'>
        {{ categoria.name }}</a>
    </nav>
</template>

<script>
const axios = require('axios').default;

export default {
    name: 'MenuCategoria',
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

<style>
.navbar{
font-weight: 400;
color: black;
}

.navbar:hover {
color: #FCE83A;
cursor: pointer;
} 
</style>