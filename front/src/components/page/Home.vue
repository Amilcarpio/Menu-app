<template>
<!-- header -->
<section class="header">
  <div class="container">
    <h1 class="title-1">MEU</h1>
    <h1 class="title-2">MENU</h1>
    <p class="sub-title lead text-center">Bem vindo(a), {{user}} leia o QR CODE
    da sua mesa ou digite o número da sua mesa abaixo:</p>
  </div>
</section>
<!-- input mesa -->
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="input-group mesa-input">
        <input type='number' min="1" max="99" class="form-control" v-model="mesa">
      </div>
    </div>
  </div>
<!-- buttons -->
<section class="buttons-section">
  <div class="container seila">
    <div class="container background p-2 pb-3 mt-2">
      <div class="container">
        <button type="button" @click="openCardapio" class="btn mt-2 " >ESCANEAR QR CODE</button>
      </div>

      <div class="container">
        <button type="button" @click="openCardapio" class="btn mt-2" >RESTAURANTES</button>
      </div>
    </div>
  </div>
</section>

</template>

<script>
export default {
  name: 'Home',
  data() {
      return {
        mesa: "",
        user: "",
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
body{
  background-color: #FCE83A;
}
@media (max-width: 720px){
  .mesa-input{
    width: 100%;
  }

  .btn{
    width: 100%;
  }
}

@media (min-width: 720px){
  .mesa-input{
    width: 30%;
  }

  .btn{
    width: 100%;
  }

  .seila{
    width: 30%;
  }
}

.title-1{
  font-style: italic;
  font-weight: 500;
  font-size: 45px;
  line-height: 58px;
  color: #B1B1B1;
}

.title-2{
  font-style: italic;
  font-weight: 500;
  font-size: 45px;
  line-height: 58px;
  color: #FFFFFF;
  margin-top:-2%;
}

@media (max-width:400px){
  .title-2{
    margin-top: -10%;
  }
}

.sub-title{
  font-weight: 500;
  letter-spacing: 0.05em;
  color: #B1B1B1;
}

.btn{
  background: #FCE83A;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 30px;
  color: #B1B1B1;
}

.background{
  background: rgba(255, 255, 255, 0.80);
  border-radius: 10px;
  width: 100%;
}

</style>
