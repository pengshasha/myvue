<template>
  <div class="people-look-details" id="detailsBox">
    <div class="mask" id="mask">
      <h3>{{peopleMoreData.name}}</h3>
      <span>{{peopleMoreData.time}}</span>
      <p>{{peopleMoreData.content}}</p>
      <span class="close-btn" id="closeBtn">×</span>
    </div>
  </div>
</template>
<script>
  import VueRouter from 'vue-router'
  const router = new VueRouter()
  export default {
    data(){
      return {
        "peopleMoreData": {}
      }
    },
    created() {
      var _this = this;
      _this.$nextTick(function () {
        _this.getMoreData();
      })
    },
    mounted: function () {
      var $btn = document.getElementById('closeBtn')
      var $mask = document.getElementById('detailsBox')
      $btn.onclick = function (e) {
        router.go(-1)
      }
    },
    watch: {
      '$route'(to,from) {
        this.getMoreData();
      }
    },
    methods: {
      getMoreData: function () {
        var _this = this;
        var _id = _this.$route.params.id;
        _this.$http.get('../../../static/data/fakedata.json').then(function (res) {
          res.body.peopleList && res.body.peopleList.forEach(function (item, index) {
            item.id == _id && (_this.peopleMoreData = item)
          })
        })
      }
    }
  }


</script>
<style scoped>
  .people-look-details{
    width: 100%;
    height: 100%;
    background: rgba(42,42,42,.45);
    position: fixed;
    top: 0;
    left: 0;
  }
  .mask{
    width: 70%;
    height: 70%;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%) ;
    padding: 10px;
  }
  .close-btn{
    position: absolute;
    top: 7px;
    right: 15px;
    font-size: 24px;
    font-weight: bolder;
    cursor: pointer;
    color: #9da0a4;
  }
  .close-btn:hover{
    color: #000;
  }
</style>
