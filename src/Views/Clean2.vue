<template>
  <div id="Clean2">
    <div class="front">
      <el-button
        class="btn1"
        style="background-color:transparent;color:#FFFFFF"
        type="primary" size="small" alt=" " icon="el-icon-arrow-left"
        @click="Back()"></el-button>
    </div>
    <div class="main">
      <div class="first">
        <div class="el-icon-folder-delete"  style=" font-size:125px"></div></div>
      <div class="second">
        <el-button
          class="btn2"
          style="background-color:#FFFFff;color:#6B6B6B"
          type="primary" size="small" alt=" "
          @click="ToClean22()">确定清除？</el-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Clean2",
        methods:
        {
          ToClean22() {this.$router.push('/Clean22');},
          Back () { this.$router.back();            },  //返回
        }
    }
</script>

<style scoped>
  .front{
    background-color: #DA949B;
    width: 100%;
    height: 12%;
    top:0%;
    right: 0%;
    font-size: 25px;
    position: absolute;
    justify-content:flex-end;
  }
  .btn1{
    border:transparent;
    width: 30%;
    height: 80%;
    top:20%;
    left: -10%;
    font-size: 30px;
    position: absolute;
    justify-content:flex-end;
  }
  .main{
    background-color: #FFE1E6;
    width: 60%;
    height: 40%;
    top:30%;
    left: 20%;
    font-size: 25px;
    position: absolute;
    justify-content:flex-end;
  }
  .first{
    background-color: #FFE1E6;
    width: 60%;
    height: 40%;
    top:20%;
    left: 20%;
    font-size: 25px;
    position: absolute;
    justify-content:flex-end;
  }
  .btn2{
    background-color: #FFFFff;
    border: solid 2.7px #DA949B;
    width: 50%;
    height: 20%;
    font-size:20px;
    top:65%;
    left: 25%;
    position: absolute;
  }
</style>
