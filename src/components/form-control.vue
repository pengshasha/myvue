<template>
  <div class="form-control">
    <div class="section">
      <h3>文本框</h3>
      <input type="text" v-model="textValue">
      Message is: {{ reversedMessage }}
      <button @click="computedSet(textValue)">set</button>
      <p class="dis">子组件说：<transition name="fade"><span v-show="isShow">{{ subValue }}</span></transition></p>
    </div>
    <div class="section textarea-box">
      <h3>多行文本</h3>
      <textarea v-model="textAreaValue"></textarea>
      Message is: {{ textAreaValue }}
      <div class="mask">{{ maskValue }}</div>
      <div class="btns">
        <button @click="saveInformation">保存</button>
        <button @click="seeInformation">查看</button>
        <button @click="clearInformation">清空</button>
      </div>
    </div>
    <div class="section">
      <h3>复选框</h3>
      <div class="input-box" v-for="(item,index) in checkboxList">
        <input type="checkbox" :id="index" :value="item" v-model="checkboxValue" @change="isSelect=true">
        <label :for="index">{{ item }}</label>
      </div>
      <br/>
      <br/>
      添加喜欢的水果:
      <input type="text" v-model="newFruits" @keyup.13="addFruits(newFruits)">
      <br/>
      <br/>
      删除不喜欢的水果:
      <button @click="hateFruits(checkboxValue)">删除</button>
      <br/>
      <br/>
      你<span v-show="isSelect">选择的</span><span v-show="!isSelect">删除的</span>水果是:<span class="select-fruits">{{ checkboxValue.toString().replace(/,/g,'&nbsp;&nbsp;') }}</span>
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
        maskValue: '',
        checkboxValue: [],
        checkboxList:Store.getValue('addFruits') || ['苹果'],
        newFruits:'',
        isSelect: true
      }
    },
    methods: {
//      reversedMessage: function () {
//        return this.textValue.split('').reverse().join('')
//      },
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
      },
      clearInformation: function () {
        Store.clearValue('textValue')
        this.maskValue = ''
      },
      computedSet: function (message) {
        this.reversedMessage = message
      },
      addFruits: function (newFruits) {
        this.checkboxList.push(newFruits)
        Store.saveValue('addFruits',this.checkboxList)
        this.newFruits = ''
      },
      hateFruits: function (hateFruits) {
        var _this = this;
        hateFruits.forEach(function (value, index, array) {
          if(_this.checkboxList.indexOf(value) != -1) {
            _this.checkboxList.splice(_this.checkboxList.indexOf(value), 1);
          }
        })
        Store.saveValue('addFruits',this.checkboxList)
        this.isSelect = false
      }
    },
    watch: {
      textValue: function () {
        this.isShow = this.textValue != ''? false : true
      }
    },
    computed: {
//      reversedMessage: function () {
//        return this.textValue.split('').reverse().join('')
//      }
      reversedMessage: {
        get: function () {
          return this.textValue.split('').reverse().join('')
        },
        set: function (message) {
          this.textValue = message + '--HELLO--'
        }
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
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0
  }
  .input-box{
    display: inline-block;
    padding-left: 6px;
  }
  .select-fruits{
    font-size: 13px;
    color: red;
    padding-left: 5px;
  }
</style>
