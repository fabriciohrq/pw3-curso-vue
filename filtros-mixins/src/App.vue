<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>Filtros e mixins</h1>
    <hr>
    <p>{{ cpf | inverter | formataCPF }}</p>
    <hr>
    <h2>Frutas</h2>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
    </ul>
    <input>
    <hr>
    <NovoFrutas />
  </div>
</template>

<script>
import FrutasVue from './components/Frutas.vue'
export default {
  components: {
    FrutasVue
  },

  filters: {
    formataCPF(valor){
    const array = valor.split('');
    array.splice(3, 0, '.');
    array.splice(7, 0, '.');
    array.splice(11, 0, '-');
    return array.join('');
    }
  },
  data() {
    return{
      cpf: '44455577700',
      frutas: ['maçã', 'morango', 'mamão'],
      fruta: ''
    }
  },
  methods: {
    add(){
      this. frutas.push(this.fruta);
      this.fruta = ''
    }
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
