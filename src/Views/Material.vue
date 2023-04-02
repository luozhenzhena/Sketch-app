<template>
  <div id="Material">
    <div class="fron1">
      <div class="title" >素材广场</div>
    </div>
    <div class="two">
      <el-button
        class="btn1"
        style="background-color:transparent;color:#CF6770"
        type="primary" size="small" alt=" "
        @click="tosket()">线 稿</el-button>
    </div>
    <div class="three">
      <el-button
        class="btn2"
        style="background-color:transparent;color:#CF6770"
        type="primary" size="small" alt=" "
        @click="topic()">参考动画图片</el-button>
    </div>
    <div class="down">
        <el-button
          class="btn3"
          style="background-color: #FFE7ED;color: #6B6B6B"
          type="primary" size="small" alt=" " icon="el-icon-s-home"
          @click="jump3()">首页</el-button>

        <el-button
          class="btn4"
          style="background-color: #FFE7ED;color:#6B6B6B"
          type="primary" size="small" alt=" " icon="el-icon-s-custom"
          @click="jump5()">我的</el-button>
    </div>
  </div>
</template>

<script>
    export default
    {
        name: "Material",
        data()
        {
        return {}
        },
       methods:
        {
          tosket(){this.$router.push('/Sketch');},//线稿
          topic(){this.$router.push('/Rpicture');},//参考动画图片
          jump3 () {this.$router.push('/Begin');},//首页
          jump5 () {this.$router.push("/HOME"); }//我的
        }
    }
</script>

<style scoped>
  .fron1{
    background-color: #DA949B;
    width: 100%;
    height: 13%;
    top:0%;
    right: 0%;
    font-size: 27px;
    position: absolute;
    justify-content:flex-end;
  }
  .title{
    top:45%;
    right: 37%;
    position: absolute;
    justify-content:flex-end;
  }
  .two{
    background-color:#FFE2E6 ;
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
    background-color:#FFE2E6 ;
    width: 100%;
    height: 11%;
    top:24.1%;
    right: 0%;
    font-size: 27px;
    position: absolute;
    justify-content:flex-end;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  }
  .btn2{
    border: transparent;
    position: absolute;
    width: 100%;
    height: 70%;
    font-size: 22px;
    right: 2%;
    bottom: 13%;
  }
  .down{
    background-color: transparent;
    border:  transparent;
    width: 100%;
    height: 8%;
    font-size:22px;
    top:92%;
    left: 0%;
    position: absolute;
    justify-content:flex-end;
  }
  .btn3{
    border: solid 1px #FFFFFF;
    width: 50%;
    height: 100%;
    font-size:20px;
    top:0%;
    left: 0%;
    position: absolute;
  }
  .btn4{
    border: solid 1px #FFFFFF;
    width: 50%;
    height: 100%;
    font-size:20px;
    top:0%;
    right: 0%;
    position: absolute;
  }

</style>
