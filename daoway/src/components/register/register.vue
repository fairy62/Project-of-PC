<template>


  <div class="register">


    <div class="content">

      <img src="./houtai-logo.png">

      <div class="input_info">

        <input class="user_ph" type="text" placeholder="请输入手机号">

        <!--<input type="text" class="user_in" placeholder="输入昵称或手机号">-->

        <img class="pic_code" src="./code.jpg">

        <input class="user_pic" type="text" placeholder="请输入图片中的字符串">

        <button class="btn2">获取验证码</button>

        <input class="user_code" type="text" placeholder="请输入手验证码">

        <input class="user_pa" type="password" placeholder="请输入密码">

        <label class="radio"><input type="radio" value="" /><a href="#">您确认并同意到位用户协议</a></label>


      </div>

    </div>



    <div class="click_register">
      <el-button type="info" class="btn3">注册</el-button>
    </div>


    <div class="register_info">
      <router-link to="/" class="register_l">首页</router-link>
      <router-link to="/login" class="register_r">已有账户？登录</router-link>
    </div>


  </div>

</template>

<script>


  export default {


  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .register
    padding 10px
    width 350px
    background #fff
    border 1px solid #ccc
    border-radius 10px
    margin 0 auto
    margin-top 100px
    position relative
    .content
      text-align center
      img
        width 300px
        height 50px
      .input_info
        .user_ph
          margin-top 20px
          margin-bottom 10px
          display inline-block
          width 300px
          height 50px
          border 1px solid #ccc
          border-radius 5px
          outline none
          font-size 18px
        .pic_code
          float left
          width 202px
          height 50px
          margin-left 25px
        .user_pic
          float left
          display inline-block
          width 202px
          height 50px
          border 1px solid #ccc
          outline none
          font-size 18px
          margin-left 25px
        .btn2
          position absolute
          width 96px
          height 102px
          top 142px
          right 35px
          border 1px solid #bbb
        .user_code
          margin-top 10px
          display inline-block
          width 300px
          height 50px
          border 1px solid #ccc
          border-radius 5px
          outline none
          font-size 18px
        .user_pa
          margin-top 10px
          display inline-block
          width 300px
          height 50px
          border 1px solid #ccc
          border-radius 5px
          outline none
          font-size 18px
        .radio
          display block
          margin-left -100px
          margin-top 10px
          a
            color #3788b4
    .click_register
      text-align center
      margin-top 20px
      .btn3
        width 300px
        height 50px
        background #337AB7
        border none
        border-radius 10px
        font-size 18px
        color #fff
    .register_info
      display inline-block
      margin-top 20px
      .register_l
        display inline-block
        color deepskyblue
        margin-left 40px
        margin-bottom 20px
      .register_r
        display inline-block
        color deepskyblue
        margin-left 120px
        margin-bottom 20px


</style>
