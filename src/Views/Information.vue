

<template>
  <div id="Information">

   <div class="pic">
     <img src="../assets/3.png" alt="风格粉刷匠"
          style="display: block; width: 100%; height: 100%">
   </div>
    <div class="down">
      <el-button
        class="btn1"
        style="background-color: transparent;color: #FFFFFF"
        type="primary" size="small" alt="  " icon="el-icon-arrow-left"
        @click="jump5()">返 回</el-button>
    </div>

  </div>

</template>

<script>
    export default {
        name: "Information",
      data(){
        return {
          imgs: "@/assets/img/3.png",
          imgsVisible: false //默认弹窗属性是隐藏的
        }
      },
      methods:{
        jump5 () {this.$router.push("/HOME"); }//我的
      }
    }
</script>

<style scoped>
.pic{
  width: 100%;
  height:100%;
  top: 20%;
  bottom: 0%;
  font-size:100%;
  background: transparent;
}
.down{
  background-color: #FFC5CD;
  border:  transparent;
  width: 96%;
  height: 8%;
  font-size:22px;
  top:90.7%;
  left: 2%;
  position: absolute;
  justify-content:flex-end;
}
  .btn1{
    border:  transparent;
    width: 100%;
    height: 120%;
    font-size: 110%;

  }
</style>
