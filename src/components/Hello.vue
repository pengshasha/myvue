<template>
  <div class="hello">
    <h1 class="hello-title">my first vue demo!</h1>
    <input v-model="newValue" @keyup.enter="addLine(newValue)">
    <ol>
      <li v-for="(item, index) in items" class="line" >
        <p>
          <span class="btn" :class="{active:item.isDel}" @click="invalid(item)">失效</span>
          <span class="btn" @click="del(index)">删除</span>
          <span class="btn" :class="{active:item.isShow}" @click="edit(item)" :title="title">编辑</span>
          <span class="text" :class="{del : item.isDel}">{{ item.title }}</span>
          <input class="edit" v-model="item.title" v-show="item.isShow" @keyup.enter="editLine(item)">
        </p>

      </li>
    </ol>
  </div>
</template>

<script>
import Store from '../store'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      items: Store.getValue() || [],
      newValue: '',
      title: '编辑'
    }
  },
  methods: {
    addLine: function (newValue) {
      !!newValue && this.items.push({
        title: newValue,
        isShow: true,
        isDel: false
      })
      Store.saveValue(this.items)
      this.newValue = ''
    },
    editLine: function (item) {
      item.isShow = !item.isShow
    },
    invalid: function (item) {
      item.isDel = !item.isDel
      this.isEditState(item)
      item.isShow = false
    },
    del: function (index) {
     this.items.splice(index, 1)
    },
    edit: function (item) {
      if(!this.isEditState(item)) {
        item.isShow = !item.isShow
      } else {
        return false;
      }

    },
    isEditState: function (item) {
      item.isDel && (this.title = '失效项不能编辑！')
      return !!item.isDel
    }
},
  watch: {
    items: {
      handler: function (val, oldVal) {
        Store.saveValue(val)
      },
      deep: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ol {
  list-style-type:decimal;
  padding: 0;
}

li {
  /*display: inline-block;*/
  width: 100%;
  line-height: 27px;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.hello{
  padding: 0 50px;
  text-align: left;
}
.hello .hello-title{
  padding: 10px 0;
}
.line span.btn{
  padding: 3px;
  background: #ccc;
  color: #fff;
  font-size: 12px;
  margin: 0 5px;
  cursor: pointer;
}
.line span.text{
  display: inline-block;
  vertical-align: middle;
 line-height: 20px;
}
.line span.active{
  background: #000;
}
  input{
    margin: 15px 0;
  }
.line input.edit{
  width: 100px;
  display: inline-block;
  margin: 0;
}
  .del{
    text-decoration:line-through
  }
</style>
