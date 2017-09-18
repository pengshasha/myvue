<template>
<div class="vuex-box">
  获取vueStore里的数据：{{ count }}
  <input type="button" class="changeData" @click="changeData" value="加一">
</div>
</template>
<script>
  export default {
    data(){
      return{
        num:1
      }
    },
    computed:{
      count () {
        return this.$store.state.num
      }
    },
    methods:{
      changeData: function () {
        this.$store.commit('increment')
      }
    }
  }
</script>
<style>
</style>
