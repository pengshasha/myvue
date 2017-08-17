<template>
  <div class="result-box">
    <h3>我是子组件(测试子组件与父组件之前的通信)</h3>
    <div v-if="isShow">
      父组件输入的内容是：
      <p class="parent-content">{{ inputValue }}</p>
    </div>
    <button class="clear-btn" @click='emitEvent'>清空</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        inputBox: '文本框',
        isShow: false
      }
    },
    props:['inputValue'],
    watch:{
      inputValue: function () {
        this.isShow = this.inputValue != ''? true : false
      }
    },
    methods: {
      emitEvent: function () {
        this.$emit('receive','结果已清空!')
      }
    }
  }
</script>
<style scoped>
  .result-box{
    width: 100%;
    height: 180px;
    padding: 10px;
    position: relative;
  }
  .result-box h3{
    font-weight: normal;
    color: #35495e;
    font-size: 18px;
  }
  .clear-btn{
    width: 80px;
    height: 30px;
    position: absolute;
    bottom: 5px;
    right: 30px;
    cursor: pointer;
  }
  .parent-content{
    font-size: 14px;
    color: red;
    padding: 5px;
  }
</style>
