<template>

  <section class="container header">
    <h1>MEU</h1>
    <h1>MENU</h1>
    <span>Dúvidas</span>
    <span>Suporte</span>
  </section>

  <section class="container main-content">
    <h2>Digite seu usuário e senha para começar:</h2>

    <div class="form group">
      <label for="user">Email ou Usuário</label>
      <input type="email" class="form-control" placeholder="Digite seu email ou usuário">
    </div>

    <div class="form-group">
      <label for="senha">Senha</label>
      <input type="password" class="form-control" placeholder="Senha">
    </div>

    <button type="submit" class="btn btn-primary">Entrar</button>
  </section>

</template>

<script>
export default {
    name: 'Login',
}
</script>

<style>

</style>