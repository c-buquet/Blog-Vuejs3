<template>
  <nav class="fixed top-0 bg-blue-500 text-white h-20 items-center w-full flex justify-center">
    <router-link class="hover:text-gray-200 px-8 h-full flex items-center" to='/'>Accueil</router-link>
    <router-link class="hover:text-gray-200 px-8 h-full flex items-center" :to="{name: 'Modify', params: {name: 'Modifier'}}">Modifier un article</router-link>
    <router-link class="hover:text-gray-200 px-8 h-full flex items-center" to='/add'>Ajouter un article</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
