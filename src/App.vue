<template>
  <div id="app">
    <HomeHeader/>
    <div class="router-view">
    <router-view/>
    </div>
    <HomeFooter/>
  </div>
</template>

<script>
import HomeFooter from './components/HomeFooter.vue';
import HomeHeader from './components/HomeHeader.vue';




export default {
  name: 'App',
  components: {
    HomeHeader,
    HomeFooter
 
  },
  data(){
    return{
      currentView: 'LoginView'
    }
  },
  methods:{
    loginHandle(){

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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.router-view{
  flex: 1;
}
</style>
