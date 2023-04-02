<template>
  <div id="CacheSet">
    <div class="fron2">
      <div class="title" >缓存设置</div>
      <el-button
        class="btn0"
        style="background-color:transparent;color:#FFFFFF"
        type="primary" size="small" alt=" " icon="el-icon-arrow-left"
        @click="jump1()"></el-button>
    </div>
    <div class="two">
      <el-button
        class="btn1"
        style="background-color:transparent;color:#6B6B6B"
        type="primary" size="small" alt=" "
        @click="ToCleanSke()">清除素材库缓存</el-button>
    </div>
    <div class="three">
      <el-button
        class="btn3"
        style="background-color:transparent;color:#6B6B6B"
        type="primary" size="small" alt=" "
        @click="ToCleanWork()">清除转换作品缓存</el-button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CacheSet",
        data()
       {
        return{}
       },
       methods:
        {
          jump1 () {this.$router.push('/Useting');},
          ToCleanSke(){ this.$router.push('/Clean1');      },  // 清素材库
          ToCleanWork(){ this.$router.push('/Clean2');       },  //清转换作品

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
  .btn0{
    border:transparent;
    width: 30%;
    height: 90%;
    top:20%;
    left: -10%;
    font-size: 30px;
    position: absolute;
    justify-content:flex-end;
  }
  .two{
    background-color:#FFFFff ;
    width: 100%;
    height: 11%;
    top:13%;
    right: 0%;
    font-size: 27px;
    position: absolute;
    justify-content:flex-end;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
  .btn1{
    border: transparent;
    position: absolute;
    width: 100%;
    height: 70%;
    font-size: 23px;
    right: 2%;
    bottom: 13%;
  }
  .three{
    background-color:#FFFFff ;
    width: 100%;
    height: 11%;
    top:24.1%;
    right: 0%;
    font-size: 27px;
    position: absolute;
    justify-content:flex-end;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
  .btn3{
    border: transparent;
    position: absolute;
    width: 100%;
    height: 70%;
    font-size: 22px;
    right: 2%;
    bottom: 13%;
  }
</style>
