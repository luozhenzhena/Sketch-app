
<template>
  <div id="home">
    <div class="main">
      <div class="one">
        <el-button class="B1" style="background-color: transparent;" type="primary" size="middle" icon="el-icon-back"
          circle @click="Back()"></el-button>

        <el-button class="B2" style="background-color: transparent;" type="primary" size="small" alt=" "
          icon="el-icon-setting" circle @click="Seting()"></el-button>
        <el-button class="B3" style="background-color: transparent;" type="primary" size="middle" icon="el-icon-user"
          circle @click="User()"></el-button>
        <el-button class="B4" style="background-color: transparent;" type="primary" size="middle"
          @click="User()">用户名</el-button>
        <el-button class="B5" style="background-color: #dba0a4;" type="primary" size="middle" icon="el-icon-arrow-right"
          @click="User()"></el-button>
        <el-button class="B6" style="background-color: transparent;" type="primary" size="middle" @click="MyFoc()">我关注的人
          1</el-button>
        <el-button class="B7" style="background-color: transparent;" type="primary" size="middle" @click="Focme()">关注我的人
          0</el-button>
      </div>

      <div class="two" @click="wokers()">
          <span class="B8">风格转换作品</span>
          <i class="el-icon-arrow-right"></i>
      </div>
      <div class="three">
        <div class="my-sketch" @click="mysketch()">
          <i class="el-icon-edit" style="color: #dba0a4"></i>
          <div class="text">我的线稿</div>
        </div>
        <div class="my-learn" @click="mypic()">
          <i class="el-icon-picture" style="color: #dba0a4"></i>
          <span class="text">我的参考图片</span>
        </div>
        <!-- <el-button class="B10" style="background-color: transparent;color: #dba0a4" type="primary" size="middle"
          icon="el-icon-edit" @click="mysketch()"></el-button>
        <el-button class="B11" style="background-color: transparent;color: #dba0a4" type="primary" size="middle"
          icon="el-icon-picture" ></el-button> -->
        <!-- <el-button class="B12" style="background-color: transparent;color: black" type="primary" size="middle"
          >我的线稿</el-button>
        <el-button class="B13" style="background-color: transparent;color: black" type="primary" size="middle"
          @click="mypic()">我的参考图片</el-button> -->
      </div>
      <div class="four">
        <el-button class="B14" style="background-color: transparent;color: #dba0a4" type="primary" size="middle"
          icon="el-icon-s-comment" @click="suggest()"></el-button>
        <el-button class="B15" style="background-color: transparent;color: #dba0a4" type="primary" size="middle"
          icon="el-icon-question" @click="helping()"></el-button>
        <el-button class="B16" style="background-color: transparent;color: black" type="primary" size="middle"
          @click="suggest()">投诉建议</el-button>
        <el-button class="B17" style="background-color: transparent;color: black" type="primary" size="middle"
          @click="helping()">帮助中心</el-button>
      </div>
      <div class="five" @click="share()">
        <span class="B18" >分享APP</span>
        <i class="el-icon-arrow-right" style="color:#000"></i>
      </div>
      <div class="six" @click="information()">
        <span class="B20">关于我们</span>
        <i class="el-icon-arrow-right" style="color:#000"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HOME",
  data() {
    return {}
  },
  methods: {
    Back() { this.$router.push('/Begin'); },  //返回
    Seting() { this.$router.push('/Useting'); },  // 设置
    User() { this.$router.push('/地址'); },  //用户
    MyFoc() { this.$router.push('/地址'); },  //关注的人
    Focme() { this.$router.push('/地址'); },  //关注我的人
    wokers() { this.$router.push('/地址'); },  //作品
    mysketch() { this.$router.push('/地址'); },  //我的线稿
    mypic() { this.$router.push('/地址'); },  // 我的参考图片
    suggest() { this.$router.push('/地址'); },  //建议
    helping() { this.$router.push('/地址'); },   //帮助
    share() { this.$router.push('/地址'); },  //分享
    information() { this.$router.push('/Information'); },  //关于我们
  }
}
</script>

<style scoped>
.app .main {
  width: 100%;
  top: 0%;
  left: 0%;
  right: 0%;
  -webkit-box-orient: horizontal;
  -webkit-flex-flow: row nowrap;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  overflow-y: auto;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
}

.one {
  width: 100%;
  height: 25%;
  left: 0%;
  right: 0%;
  background: #dba0a4;
}

.two {
  position: absolute;
  width: 100%;
  height: 5%;
  top: 25%;
  background: #FFE7ED;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.three {
  position: absolute;
  width: 100%;
  height: 15%;
  top: 30%;
  background: #FFFAFA;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.four {
  position: absolute;
  width: 100%;
  height: 15%;
  top: 50%;
  background: #FFFAFA;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.five {
  position: absolute;
  width: 100%;
  height: 5%;
  top: 60%;
  background: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.six {
  position: absolute;
  width: 100%;
  height: 5%;
  top: 66%;
  background: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}

.B1 {
  border: transparent;
  position: absolute;
  font-size: 46px;
  left: 4.5%;
  top: 1%;
}

.B2 {
  border: transparent;
  position: absolute;
  font-size: 37px;
  display: flex;
  right: 5.9%;
  top: 1.5%;
}

.B3 {
  border: transparent;
  position: absolute;
  font-size: 60px;
  display: flex;
  left: 7.5%;
  top: 10%;
}

.B4 {
  border: transparent;
  position: absolute;
  font-size: 25px;
  display: flex;
  left: 25%;
  top: 12%;
}

.B5 {
  border: transparent;
  position: absolute;
  font-size: 20px;
  display: flex;
  right: 4.5%;
  top: 12%;
}

.B6 {
  border: transparent;
  position: absolute;
  font-size: 22px;
  display: flex;
  left: 3%;
  top: 19%;
}

.B7 {
  border: transparent;
  position: absolute;
  font-size: 22px;
  display: flex;
  right: 8%;
  top: 19%;
}

.B8 {
  border: transparent;
  position: absolute;
  font-size: 21px;
  display: flex;
  left: 7%;
  top: 25%;
  color: #000000;
}

.my-sketch {
  position: absolute;
  font-size: 60px;
  display: flex;
  flex-direction: column;
  left: 11%;
  top: 10%;
}

.my-learn {
  position: absolute;
  font-size: 60px;
  display: flex;
  flex-direction: column;
  left: 49%;
  top: 10%;
}

.B12 {
  border: transparent;
  position: absolute;
  font-size: 16px;
  display: flex;
  left: 9%;
  top: 68%;
}

.B13 {
  border: transparent;
  position: absolute;
  font-size: 16px;
  display: flex;
  left: 45%;
  top: 70%;
}

.B14 {
  border: transparent;
  position: absolute;
  font-size: 66px;
  display: flex;
  left: 11%;
  top: 11%;
}

.B15 {
  border: transparent;
  position: absolute;
  font-size: 70px;
  display: flex;
  left: 49%;
  top: 10%;
}

.B16 {
  border: #fffa;
  position: absolute;
  font-size: 19px;
  display: flex;
  left: 9%;
  top: 68%;
}

.B17 {
  border: #FFE7ED;
  position: absolute;
  font-size: 18px;
  display: flex;
  left: 50%;
  top: 70%;
}

.B18 {
  border: transparent;
  position: absolute;
  font-size: 19px;
  display: flex;
  width: 60%;
  height: 30%;
  left: 10%;
  top: 23%;
  color: #000000;
}

.B20 {
  border: transparent;
  position: absolute;
  font-size: 19px;
  width: 60%;
  height: 30%;
  display: flex;
  left: 10%;
  top: 25%;
  color: #000000;
}

.el-icon-arrow-right{
  position: relative;
  left:40%;
  top:40%;
  color: #000000;
}

.text{
  color:#000000;
  font-size: 20px;
}
</style>
