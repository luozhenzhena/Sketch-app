
<template>
  <div id="Begin">
    <div class="main">
      <div class="sidebar">
        <img src="../assets/1.png" alt="风格粉刷匠"
             style="display: block; width: 95%; height: 65%">
      </div>

      <div class="leftbottom1">
        <el-button
          class="btn3"
          style="background-color: #dba0a4;color: #6B6B6B"
          type="primary" size="big" alt="素材中心" icon="el-icon-brush" circle @click="jump1()">素材中心</el-button>
      </div>

      <div class="leftbottom2">
        <el-button
          class="btn4"
          style="background-color: #dba0a4;color: #6B6B6B"
          type="primary" size="big" alt=" " icon="el-icon-s-promotion" circle
          @click="jump2()">分享中心</el-button>
      </div>

      <div class="bottom1">

          <el-button
            class="btn1"
            style="background-color: #FFFFff;color: #6B6B6B"
            type="primary" size="small" alt=" " icon="el-icon-s-home"
            @click="jump3()">首页</el-button>

          <el-button
            class="btn5"
            style="background-color: transparent;color: #dba0a4"
            type="primary" size="middle"  icon="el-icon-circle-plus-outline"   circle
            @click="jump4()"></el-button>

          <el-button
            class="btn2"
            style="background-color: transparent;color:#6B6B6B"
            type="primary" size="small" alt=" " icon="el-icon-s-custom"
            @click="jump5()">我的</el-button>

      </div>

    </div>
  </div>
</template>


<script>
  import "@/assets/appplot.css"
    export default
    {
        name: "Begin",
      data()
      {
        return {}
      },
      methods:
        {
        jump1 () {this.$router.push('/Material');},//素材中心
        jump2 () {this.$router.push('/页面地址');},//分享中心
        jump3 () {this.$router.push('/Begin');},//首页
        jump4 () {this.$router.push('/WORK');},//操作页面
        jump5 () {this.$router.push("/HOME"); }//我的
      }
    }

</script>

<style scoped>
  .bottom1{
    background-color: #FFFFFF;
    width: 100%;
    height: 10%;
    top:100%;
    border-top: solid 2px #DCDCDC;
    border-radius: 10%;
    position: absolute;
    justify-content:flex-end;
  }

  .btn1 {
    border: none;
    position: relative;
    font-size: 20px;
    transform: translate(-10%,0);
    bottom: 15%;
  }

  .btn2 {
    border: none;
    position: relative;
    font-size: 20px;
    bottom: 15%;
  }

  .btn5 {
    border:none;
    position: relative;
    font-size: 60px;
    margin: auto;
  }
  .leftbottom1{
    /* width: 35%;
    height:20%; */
    top: 30%;
    font-size:20px;
    background: transparent;
  }

  .btn3 {
    width: 25%;
    height:15%;
    position: absolute;
    right: 10%;
    top:24%;
    font-size:76%;
    border: transparent;
  }

  .leftbottom2{
    width: 35%;
    height:20%;
    right: 3%;
    top: 50%;
    position: absolute;
    font-size:20px;
    background: transparent;
  }

  .btn4 {
    width: 73%;
    height:72.5%;
    position: absolute;
    right: 16%;
    top:12%;
    font-size:78%;
    border: transparent;
  }
</style>
<style scoped>
</style>
