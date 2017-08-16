<template>
<div class="header">
  <a href="#" class="logo">
    <img src="../../static/logo.png">
  </a>
  <div class="nav">
    <router-link to="/list">todo list</router-link>
    <router-link to="/count">count</router-link>
  </div>
</div>
</template>
<script>
  export default {
  }
</script>
<style>
  a{
    text-decoration: none;
  }
  .header{
    width: 100%;
    padding: 30px 10px;
    overflow: hidden;
    border-bottom: 5px solid #ccc;
  }
  .header a.logo{
    float: left;
    padding-right: 60px;
  }
  .nav{
    float: left;
    line-height: 50px;
  }
  .nav a{
    position: relative;
    display: inline-block;
    padding: 0 20px;

  }
  .nav a:hover{
    color: red;
  }
  .nav a:after{
    content: '|';
    color: #000;
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
