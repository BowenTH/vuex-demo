<template>
  <div id="app">
    <img :src="imgData">
    <Login /> 
  </div>
</template>

<script>
import imgData from './common/api/logo';
import Login from './components/Login.vue';
// const imgUrl = require('./assets/logo.png')

export default {
  name: 'app',
  components: {
    Login,
  },
  data:function(){
    return {
      imgData: imgData
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
