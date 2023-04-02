<template>
    <div id="WORK">
      <div class="fron">
      <div class="title" >操作页面</div>
    </div>
      <div class="czym">
        <div class="upsket">
          <div class="title1" >上传线稿</div>
          <el-upload :action="upurl1" :data="myData1" list-type="picture-card" :on-preview="handlePictureCardPreview1"
                     :on-remove="handleRemove1" :on-change='imgchange1' :file-list="fileList1" multiple>
            <i class="el-icon-plus"></i>
          </el-upload>

        </div>
        <div class="uppic">
          <div class="title2" >上传参考图片 </div>
          <el-upload :action="upurl2" :data="myData2" list-type="picture-card" :on-preview="handlePictureCardPreview2"
                     :on-remove="handleRemove2" :on-change='imgchange2' :file-list="fileList2" multiple>
            <i class="el-icon-plus"></i>
          </el-upload>
      </div>
        <div class="make">
          <el-button
          class="makeing"
          style="background-color: #C73829;color: #FFFFFF"
          type="primary" size="middle" >生成图片</el-button>
        </div>
        <div class="out" style="background-color: #AAC3D6;"
             type="primary" size="middle" >
        </div>
        <div class="upmore">
          <div class="title3" >处理多张线稿 ></div>
          <el-button
            class="upskets"
            style="background-color: #F5A7B3;color: #FFFFFF"
            type="primary" size="middle" >上传多张线稿</el-button>
          <el-button
            class="upspics"
            style="background-color: #FFFFFF;color: #F57A7C"
            type="primary" size="middle" >上传多张参考图片</el-button>
        </div>
      </div>
      <div class="down">
        <el-button-groud>
          <el-button
            class="btn1"
            style="background-color: #FFE7ED;color: #6B6B6B"
            type="primary" size="small" alt=" " icon="el-icon-s-home"
            @click="jump3()">首页</el-button>

          <el-button
            class="btn2"
            style="background-color: #FFE7ED;color:#6B6B6B"
            type="primary" size="small" alt=" " icon="el-icon-s-custom"
            @click="jump5()">我的</el-button>
        </el-button-groud>
      </div>
    </div>
</template>

<script>
    export default {
        name: "WORK",
       data:{
          upurl1: 'https://xxxx',
          upurl2: 'https://xxxx',
          myData1:{key: 'Gn1xVdBiTClSSHKZifg0pTQSU5XGagWO'},
          myData2:{key: 'Gn1xVdBiTClSSHKZifg0pTQSU5XGagWO'},
          fileList1: [],
          fileList2: [],
          dialogImageUrl1: '',
          innerVisible1: false,
         dialogImageUrl2: '',
         innerVisible2: false,
      },
      created() {},
      methods: {
        //上传
        // on-change	文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
        imgchange1(file1, fileList1)
        {
          this.fileList1 = fileList1
          console.log('111', file1, fileList1, this.fileList1)
        },
        //on-remove	文件列表移除文件时的钩子
        handleRemove1(file1, fileList1)
        { this.fileList1 = fileList1
          console.log(this.fileList1)
        },
        //on-preview	点击文件列表中已上传的文件时的钩子(预览图片弹窗)
        handlePictureCardPreview1(file1)
        { this.dialogImageUrl1 = file1.url;
          this.innerVisible1 = true;
          },

      imgchange2(file2, fileList2)
      { this.fileList1 = fileList2
        console.log('111', file2, fileList2, this.fileList2)
      },
      //on-remove	文件列表移除文件时的钩子
      handleRemove2(file2, fileList2)
      { this.fileList2 = fileList2
        console.log(this.fileList2)
      },
      //on-preview	点击文件列表中已上传的文件时的钩子(预览图片弹窗)
      handlePictureCardPreview2(file2)
      { this.dialogImageUrl2 = file2.url;
        this.innerVisible2 = true;
        },
        jump3 () {this.$router.push('/Begin');},//首页
        jump5 () {this.$router.push("/HOME"); }//我的
    }
    }

</script>

<style scoped>
  .fron{
    background-color: #DA949B;
    width: 100%;
    height: 14%;
    top:0%;
    right: 0%;
    font-size: 25px;
    position: absolute;
    justify-content:flex-end;
  }
  .title{
    top:20%;
    right: 40%;
    position: absolute;
    justify-content:flex-end;
  }
.czym{
  background-color: #FFCDCE;
  width: 100%;
  height: 85%;
  top:8%;
  bottom: 7%;
  right: 0%;
  position: absolute;
  justify-content:flex-end;
}

  .upsket{
    background-color:transparent;
    width: 40%;
    height: 22%;
    top:5%;
    bottom: 7%;
    left: 3.6%;
    position: absolute;
    justify-content:flex-end;
  }
  .title1{
    color: #6B6B6B;
    font-size:18px;
    top:5%;
    right: 25%;
    position: absolute;
    justify-content:flex-end;
  }
  .uppic{
    background-color: transparent;
    width: 40%;
    height: 22%;
    top:5%;
    bottom:7%;
    right: 5.6%;
    position: absolute;
    justify-content:flex-end;
  }
  .title2{
    color: #6B6B6B;
    font-size:18px;
    top:5%;
    right: 10%;
    position: absolute;
    justify-content:flex-end;
  }
.make{
  background-color: transparent;
  width: 100%;
  height: 40%;
  top:30%;
  bottom: 7%;
  right: 0%;
  position: absolute;
  justify-content:flex-end;
}
  .makeing{
    border: #B43325;
    width: 30%;
    height: 15%;
    font-size:18px;
    top:8%;
    right: 35%;
    position: absolute;
    justify-content:flex-end;
  }
  .out{
    background-color: #AAC3D6;
    border: solid 4px #FFFFFF;
    width: 40%;
    height: 21%;
    font-size:20px;
    top:44%;
    right: 28%;
    position: absolute;
    justify-content:flex-end;
  }
  .upmore{
    background-color: transparent;
    border:  transparent;
    width: 100%;
    height: 26%;
    font-size:22px;
    top:71%;
    position: absolute;
    justify-content:flex-end;
  }
   .title3{
     color: #C73829;
     font-size:20px;
     top:15%;
     left: 10%;
     position: absolute;
     justify-content:flex-end;
   }
   .upskets{
     border: solid 2px #F57A7C;
     width: 40%;
     height: 27%;
     font-size:17px;
     top:50%;
     left: 3%;
     position: absolute;
     justify-content:flex-end;
   }
  .upspics{
    border: solid 2px #F57A7C;
    width: 48%;
    height: 27%;
    font-size:17px;
    top:50%;
    right: 2%;
    position: absolute;
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
  .btn1{
    border: transparent;
    width: 50%;
    height: 100%;
    font-size:20px;
    top:0%;
    left: 0%;
    position: absolute;
  }
  .btn2{
    border: transparent;
    width: 50%;
    height: 100%;
    font-size:20px;
    top:0%;
    right: 0%;
    position: absolute;
  }

</style>
