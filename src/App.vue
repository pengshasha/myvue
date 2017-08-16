<template>
  <div id="container">
    <headers></headers>
    <router-view></router-view>
    <!--<hello></hello>-->
  </div>
</template>

<script>
  import Hello from './components/Hello'
  export default {
    name: 'container'
//    components: {
//      Hello
//    }
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
