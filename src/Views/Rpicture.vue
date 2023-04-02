<template>

  <div id="Rpicture">
    <div class="fron2">
      <div class="title" >参考动画图片</div>
      <el-button
        class="btn1"
        style="background-color:transparent;color:#FFFFFF"
        type="primary" size="small" alt=" " icon="el-icon-arrow-left"
        @click="jump1()"></el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Rpicture",
      data()
      {
        return{}
      },
      methods:{
        jump1 () {this.$router.back();},
      }

    }
</script>

<style scoped>
  .fron2{
    background-color: #DA949B;
    width: 100%;
    height: 12%;
    top:0%;
    right: 0%;
    font-size: 25px;
    position: absolute;
    justify-content:flex-end;
  }
  .title{
    width: 50%;
    top:45%;
    right: 25%;
    position: absolute;
    justify-content:flex-end;
  }
  .btn1{
    border:transparent;
    width: 30%;
    height: 90%;
    top:20%;
    left: -10%;
    font-size: 30px;
    position: absolute;
    justify-content:flex-end;
  }
</style>
