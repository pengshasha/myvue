<template>
  <div class="count">
    <input v-model="firstNum">
    <!--<span @click="add('firstNum')">{{ firstNum }}</span>-->
    <!--<span>+</span>-->
    <select v-model="selected">
      <option value="加">加</option>
      <option>减</option>
      <option>乘</option>
      <option>除</option>
    </select>
    <input v-model="secondNum">
    <!--<span @click="add('secondNum')">{{ secondNum }}</span>-->
    <span @click="total()">=</span>
    <!--<input v-model="totalNum">-->
    <span>{{ totalNum }}</span>
    <div class="dis">{{firstNum}} {{selected}} {{secondNum}} 等于 {{totalNum}}</div>
  </div>
</template>
<script>
  export default {
    name: 'count',
    data() {
      return {
        firstNum: 0,
        secondNum: 0,
        totalNum: 0,
        selected: '加'
      }
    },
    methods: {
      add: function (n) {
        this[n]++
      },
      total: function () {
        var operation = this.selected
        switch(operation)
        {
          case '加':
            this.totalNum = parseInt(this.firstNum) + parseInt(this.secondNum)
            break;
          case '减':
            this.totalNum = parseInt(this.firstNum) - parseInt(this.secondNum)
            break;
          case '乘':
            this.totalNum = parseInt(this.firstNum) * parseInt(this.secondNum)
            break;
          case '除':
            this.totalNum = parseInt(this.firstNum) / parseInt(this.secondNum)
            break;
        }
      }
    }
  }
</script>
<style scoped>
  .count{
    padding: 30px;
  }
  .count span{
    width: 50px;
    height: 34px;
    line-height: 34px;
    display: inline-block;
    padding: 0 10px;
    background: #ccc;
    color: #000;
    cursor: pointer;
    margin-right: 10px;
  }
  select{
    width: 60px;
    height:34px;
    margin: 0 10px;
    vertical-align: top;
  }
  input{
    width: 40px;
    height:30px;
    vertical-align: top;
  }
  div.dis{
    padding: 20px 0;
    color: red;
  }
</style>
