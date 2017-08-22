<template>
  <div class="details" id="details">
    <div class="details-left" id="details-left">
      <router-link to="/list-details/people-list">人物列表</router-link>
      <router-link to="/list-details/course-list">课程列表</router-link>
    </div>
    <div class="details-right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  export default {
    mounted: function () {
      var height = document.body.scrollHeight
      var Dom = document.getElementById('details-left')
      Dom.style.minHeight= (height - 115)+'px'
    }
  }

</script>
<style scoped>
  .details{
    width: 100%;
    overflow: hidden;
  }
  .details .details-left{
    width: 20%;
    height: 100%;
    padding: 10px 0;
    text-align: center;
    float: left;
    box-sizing: border-box;
    border-right: 2px solid #ddd;
  }
  .details .details-left a{
    width: 100%;
    display: block;
    line-height: 37px;
    border-bottom: 1px solid #ddd;
  }
  .details .details-left a:hover{
    background-color: #caeecd;
    color: #fff;
  }
  .details .details-left a.router-link-active{
    background-color: #caeecd;
    color: #fff;
  }
  .details .details-right{
    width: 80%;
    padding: 10px;
    box-sizing: border-box;
    float: left;
  }
</style>
