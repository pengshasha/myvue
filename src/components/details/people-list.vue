<template>
  <div class="people-list">
    <ul class="list-box">
      <li v-for="item in listData">
        <img :src="'../../../static/image/'+ item.src">
        <div class="text-box">
          <h3>{{ item.name }}</h3>
          <p class="dis">{{ item.dis }}</p>
          <span class="time">{{ item.time }}</span>
          <span class="look-more">查看详情</span>
        </div>
      </li>
      <li>
        <img src="../../assets/ayst.jpg">
        <div class="text-box">
          <h3>爱因斯坦</h3>
          <p class="dis">阿尔伯特·爱因斯坦（Albert.Einstein，1879年3月14日-1955年4月18日），出生于德国符腾堡王国乌尔姆市，毕业于苏黎世大学，犹太裔物理学家，享年76岁。</p>
          <span class="time">1879年3月14日</span>
          <span class="look-more">查看详情</span>
        </div>
      </li>
      <li>
        <img src="../../assets/ayst.jpg">
        <div class="text-box">
          <h3>爱因斯坦</h3>
          <p class="dis">阿尔伯特·爱因斯坦（Albert.Einstein，1879年3月14日-1955年4月18日），出生于德国符腾堡王国乌尔姆市，毕业于苏黎世大学，犹太裔物理学家，享年76岁。</p>
          <span class="time">1879年3月14日</span>
          <span class="look-more">查看详情</span>
        </div>
      </li>
      <li>
        <img src="../../assets/ayst.jpg">
        <div class="text-box">
          <h3>爱因斯坦</h3>
          <p class="dis">阿尔伯特·爱因斯坦（Albert.Einstein，1879年3月14日-1955年4月18日），出生于德国符腾堡王国乌尔姆市，毕业于苏黎世大学，犹太裔物理学家，享年76岁。</p>
          <span class="time">1879年3月14日</span>
          <span class="look-more">查看详情</span>
        </div>
      </li>
      <li>
        <img src="../../assets/ayst.jpg">
        <div class="text-box">
          <h3>爱因斯坦</h3>
          <p class="dis">阿尔伯特·爱因斯坦（Albert.Einstein，1879年3月14日-1955年4月18日），出生于德国符腾堡王国乌尔姆市，毕业于苏黎世大学，犹太裔物理学家，享年76岁。</p>
          <span class="time">1879年3月14日</span>
          <span class="look-more">查看详情</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        listData: "",
        src: ""
      }
    },
    mounted: function () {
      this.getListData()
    },
    methods: {
      getListData: function () {
        var _this = this;
        _this.$http.get('../../../static/data/fakedata.json').then(function (res) {
          if(res && res.status == 200) {
//            res.body.peopleList.forEach(function (value, index) {
//              value.src = require()
//            })
            _this.listData = res.body.peopleList || []
          } else {
            throw new Error('Failed to obtain data')
          }
        })
      }
    }

  }
</script>
<style scoped>
  ul li{
    list-style: none;
  }
  .people-list ul.list-box{
    width: 100%;
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .people-list ul li{
    width: 25%;
    padding: 10px 15px 30px 15px;
    text-align: center;
    box-sizing: border-box;
  }
  .people-list ul li img{
    max-width: 80%;
  }
  .people-list ul li p{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical;
    text-align: left;
    word-break:break-all;
    font-size: 13px;
    margin: 8px 0;
  }
  .people-list ul li span.time{
    padding: 3px;
    background-color: #b4b472;
    font-size: xx-small;
    float: left;
    color: #fff;
  }
  .people-list ul li span.look-more{
    font-size: xx-small;
    color: green;
    float: right;
  }
</style>
