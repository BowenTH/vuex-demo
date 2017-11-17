<template>
  <div id="app">
    <img src="./assets/logo.png">
    <BaseView />  
    <HelloWorld/>  
    <Footers />
  </div>
</template>

<script>
import BaseView from '@/components/BaseView.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Footers from '@/components/footer.vue';
export default {
  name: 'app',
  components: {
    BaseView,
    HelloWorld,
    Footers,
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
