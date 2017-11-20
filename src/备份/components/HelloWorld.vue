<template>
  <div class="hello">
    <h3>
      <router-link to="/vuex">todo</router-link>
      <router-link to="/todo">vuex</router-link>
      <!-- <router-link :to="{name:'todo',params:{id:23}}">
        <button class="list-button">vuex-demo</button>
      </router-link> -->
    </h3>
    <router-view></router-view>
    <router-view name="a"></router-view>
    <router-view name="b"></router-view>
    <!-- <count></count> -->
  </div>
</template>

<script>
import Tab from '@/components/tab';
import Todo from '@/components/todo'; 
import Count from './count'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.list-button{
  font-size: 25px;
  border-radius: 5px;
}
</style>
