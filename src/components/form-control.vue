<template>
  <div class="form-control">
    <div class="section">
      <h3>文本框</h3>
      <input type="text" v-model="textValue">
      Message is: {{ reversedMessage }}
      <p class="dis">子组件说：<span v-show="isShow">{{ subValue }}</span></p>
    </div>
    <div class="section textarea-box">
      <h3>多行文本</h3>
      <textarea v-model="textAreaValue"></textarea>
      Message is: {{ textAreaValue }}
      <div class="mask">{{ maskValue }}</div>
      <div class="btns">
        <button @click="saveInformation">保存</button>
        <button @click="seeInformation">查看</button>
      </div>
    </div>
    <div class="section">
      <h3>复选框</h3>
      <input type="checkbox">
      <label>苹果</label>
      <input type="checkbox">
      <label>梨子</label>
      <input type="checkbox">
      <label>香蕉</label>
    </div>
    <div class="section">
      <h3>单选按钮</h3>
      <input type="radio">
      <label>one</label>
      <input type="radio">
      <label>two</label>
    </div>
    <div class="section">
      <h3>下拉框</h3>
      <select>
        <option>苹果</option>
        <option>梨子</option>
        <option>香蕉</option>
      </select>
    </div>
    <div class="section result">
      <result :inputValue = 'textValue'  @receive="subInformation"></result>
    </div>
  </div>
</template>
<script>
  import Result from './result'
  import Store from '../store'
  export default {
    components: {
      Result
    },
    data() {
      return {
        textValue: '',
        textAreaValue: '',
        subValue: '',
        isShow: true,
        maskValue: ''
      }
    },
    methods: {
      subInformation: function (message) {
        this.subValue = message
        this.textValue = ''
      },
      saveInformation: function () {
        var text = Store.getValue('textValue') || ''
        Store.saveValue('textValue',text + this.textAreaValue)
        this.textAreaValue = ''
      },
      seeInformation: function () {
        this.maskValue = Store.getValue('textValue')
      }
    },
    watch: {
      textValue: function () {
        this.isShow = this.textValue != ''? false : true
      }
    },
    computed: {
      reversedMessage: function () {
        return this.textValue.split('').reverse().join('')
      }
    }
  }
</script>
<style scoped>
  .form-control{
    padding: 30px;
    position: relative;
  }
  .form-control .section{
    padding-bottom: 15px;
  }
  .form-control .section h3{
    padding-bottom: 5px;
    font-size: 20px;
  }
  .result{
    width: 50%;
    height: 200px;
    border: 1px solid #ccc;
    position: absolute;
    top: 30px;
    right: 30px;
  }
  .dis{
    padding: 5px 0;
    color: red;
    font-size: 13px;
  }
  .textarea-box{
    position: relative;
  }
  .textarea-box .btns{
    position: absolute;
    bottom: 15px;
    left: 170px;
  }
  .textarea-box .btns button{
    width: 50px;
    cursor: pointer;
  }
  textarea {
    width: 160px;
    height:80px;
    vertical-align: top;
  }
</style>
