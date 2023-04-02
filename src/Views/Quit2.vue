<template>
  <div id="Quit2">
    <div class="main">
      <div class="first">
        <el-button
          class="btn1"
          style="background-color: #FFE7ED;color: #6B6B6B"
          type="primary" size="small" alt=" "
          @click="quit()">退出</el-button>

        <el-button
          class="btn2"
          style="background-color: #FFE7ED;color:#6B6B6B"
          type="primary" size="small" alt=" "
          @click="Back()">返回</el-button>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Quit2",
        methods:
        {
          quit() { },
          Back () { this.$router.push("/Useting");     },  //返回
        }
    }
</script>

<style scoped>

  .main{
    background-color: #FFE1E6;
    width: 80%;
    height: 30%;
    top:30%;
    left: 10%;
    font-size: 25px;
    position: absolute;
    justify-content:flex-end;
  }
  .first{
    background-color: transparent;
    width: 80%;
    height: 40%;
    top:30%;
    left: 10.5%;
    font-size: 25px;
    position: absolute;
    justify-content:flex-end;
  }
  .btn1{
    border: solid 3px #FFFFff;
    width: 50%;
    height: 75%;
    font-size:20px;
    top:0%;
    left: 0%;
    position: absolute;
  }
  .btn2{
    border: solid 3px #FFFFff;
    width: 50%;
    height: 75%;
    font-size:20px;
    top:0%;
    right: 0%;
    position: absolute;
  }
</style>
