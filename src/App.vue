<template>
  <div id="container">
    <headers></headers>
    <router-view></router-view>
    <!--<hello></hello>-->
    <br/>
    <br/>
    <br/>
    <!--<input class="destroy-btn" type="button" value="销毁"　@click="destroy">-->
    <!--<input type="text" v-model="message">-->
  </div>
</template>

<script>
  import Hello from './components/Hello'
  export default {
   data() {
     return {
       message: 'vue的生命周期！'
     }
   },
//    beforeCreate: function () {
//      console.log('%c创建前(beforeCreate)...... ', 'color: red');
//      console.log('data: '+ this.message);
//      console.log('el: '+ this.$el);
//      this.init()
//    },
//    created: function () {
//      console.log('%c创建后(created)......', 'color: red');
//      console.log('data: '+ this.message);
//      console.log('el: '+ this.$el);
//      this.init()
//    },
//    beforeMount: function () {
//      console.log('%c挂载前(beforeMount)......', 'color: red');
//      console.log('data: '+ this.message);
//      console.log('el: '+ this.$el);
//    },
//    mounted: function () {
//      console.log('%c挂载后(mounted)......', 'color: red');
//      console.log('data: '+ this.message);
//      console.log('el: '+ this.$el);
//    },
//    beforeUpdate: function () {
//      console.log('%c更新前(beforeUpdate)......'+ new Date(), 'color: red');
//      console.log('data: '+ this.message);
//      console.log('el: '+ this.$el);
//    },
//    updated: function () {
//      console.log('%c更新后(updated)......'+ new Date(), 'color: red');
//      console.log('data: '+ this.message);
//      console.log('el: '+ this.$el);
//    },
//    beforeDestroy: function () {
//      console.log('%c销毁前(beforeDestroy)......', 'color: red');
//      console.log('data: '+ this.message);
//      console.log('el: '+ this.$el);
//    },
//    destroyed: function () {
//      console.log('%c销毁完成后(destroyed)......', 'color: red');
//      console.log('data: '+ this.message);
//      console.log('el: '+ this.$el);
//    },
//    methods:{
//      init() {
//        console.log('%c事件初使化成功(methods)......', 'color: blue')
//      },
//      destroy() {
//        console.log('%c执行销毁......', 'color: blue')
//        this.$destroy();
//      }
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
