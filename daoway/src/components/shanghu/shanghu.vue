<template>
    <div class="container">
      <el-row>
        <el-col :xs="8" :sm="8" :md="8" :lg="8">
          <div class="blank"></div>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8">
          <div class="login">
            <div class="content">
              <h2>到位商家后台</h2>
              <div class="input-group">
                <span class="input-group-addon icon-user"><i class="fa fa-user"></i></span>
                <input class="form-control ng-pristine ng-untouched ng-valid" id="username" type="text" ng-model="name" placeholder="输入昵称或手机号">
              </div>
              <form class="input2 ng-pristine ng-valid" name="forms">
                <span id="box">
                    <div class="input-group">
                        <span class="input-group-addon icon-lock"><i class="fa fa-lock"></i></span>
                        <input class="form-control ng-pristine ng-untouched ng-valid" id="password" type="password" placeholder="输入密码" ng-model="password">
                    </div>
                </span>
              </form>
              <div class="zhuce">
                <button class="btn">登录</button>
              </div>
              <div style="padding: 20px;">
                <a class="pull-left" style="float:left;font-size: 14px" href="##">忘记密码</a>
                <a class="pull-right" style="float: right;font-size: 14px" href="##">注册</a>
              </div>
              <br>
            </div>

            <!--<el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>
                  <img src="../../img/main/houtai-logo.png">
                </span>
              </div>
              <div>
                <span class="icon-user"></span>
                <input class="inputlg" type="text" placeholder=" 输入昵称或手机号">
              </div>
              <div>
                <span class="icon-lock"></span>
                <input class="inputlg" type="text" placeholder=" 输入密码">
              </div>
            </el-card>-->
          </div>
          <!--<div class="regist">
            <div class="content">
              <h2>注册</h2>
              <div class="control-group">
                <div class="input">
                  <input class="form-control ng-pristine ng-untouched ng-valid ng-valid-maxlength" maxlength="11" type="text" ng-model="phone" placeholder="请输入手机号" onkeyup="value=value.replace(/\D/g,'')">
                  <div class="input-group">
                    <img style="height:50px;width: 100%;border: 1px solid #ccc;" ng-src="/daoway/rest/kaptcha/code.jpg" ng-click="getVerifyCode()" src="/daoway/rest/kaptcha/code.jpg">
                    <input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-valid-maxlength" maxlength="4" ng-model="verify_code" placeholder="请输入图片中的字符串">
                    <span class="input-group-addon" ng-click="getVerify()" style="cursor:pointer" ng-show="isVerify">获取验证码</span>
                    <span class="input-group-addon ng-binding ng-hide" ng-show="!isVerify">重新发送60</span>
                  </div>
                  <input type="text" style="margin: 10px 0;" class="form-control ng-pristine ng-untouched ng-valid ng-valid-maxlength" maxlength="4" ng-model="verify" placeholder="请输入验证码" onkeyup="value=value.replace(/\D/g,'')">
                  <input class="form-control ng-pristine ng-untouched ng-valid" ng-model="password" type="password" id="password" placeholder="请输入密码">
                </div>
              </div>
            </div>
            <div class="checkbox">
              <label>
                <input type="checkbox" name="vehicle" value="Car" ng-checked="isChecked" ng-model="isChecked" class="ng-pristine ng-untouched ng-valid">
                <a href="partials/reg.html" target="_Blank">您确认并同意到位用户协议</a>
              </label>
            </div>
            <br>
            <div ng-class="{'info': 'alert alert-info', 'error': 'alert alert-danger'}[isActive]" role="alert" ng-show="registError" class="ng-binding ng-hide">
              <button type="button" class="close" ng-click="cleanErrorMsg()">
                <span aria-hidden="true">×</span>
              </button>

            </div>
            <div class="zhuce">
              &lt;!&ndash;<a class="btn btn-warning btn-lg" ng-href="#/regist">注册</a>&ndash;&gt;
              <button class="btn btn-primary btn-lg btn-block" ng-enter="doRegist()" ng-click="doRegist()">注册</button>
            </div>
            <div style="padding: 20px;">
              <a style="margin-left: 80px" href="#/login">已有账户？登录</a>
            </div>
          </div>-->
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8">
          <div class="blank"></div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  import Vue from 'vue'
  import {Card, Row, Col} from 'element-ui'

  Vue.use(Card)
  Vue.use(Row)
  Vue.use(Col)

    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .container
    height: 1000px
    text-align center
    .clearfix
      height: 70px
      line-height: 70px
      img
        width: 100%
        height: 100%
    .blank
      height: 100px
      width:33.333%
    .login
      max-width: 330px;
      padding: 15px;
      margin: 0 auto;
      margin-top: 13%;
      border-radius: 5px;
      background: #fff;
      border: 1px #ccc solid;
      .content
        h2
          background: url(../../img/main/houtai-logo.png) center no-repeat;
          height: 70px;
          line-height: 70px;
          text-indent: -9999px;
          background-size: 290px;
          margin-top: 0;
          margin-bottom: 10px;
        .input-group
          position: relative;
          display: table;
          border-collapse: separate;
          .input-group-addon
            padding: 19px 12px;
            font-size: 14px;
            font-weight: 400;
            line-height: 1;
            color: #555;
            text-align: center;
            background-color: #eee;
            border: 1px solid #ccc;
            border-radius: 4px;
            width: 1%;
            white-space: nowrap;
            vertical-align: middle;
          .icon-user
            border-bottom: 0;
            border-bottom-left-radius: 0;
          .icon-lock
            border-top-left-radius: 0;

            .fa
              display: inline-block;
              font: normal normal normal 14px / 1 FontAwesome;
              font-size: inherit;
              text-rendering: auto;
              -webkit-font-smoothing: antialiased;

          .form-control
            position: relative;
            height: auto;
            padding: 15px;
            box-sizing: border-box;
            font-size: 16px;
            padding-right: 50px;
            width:285px
        .zhuce
          .btn
            display block
            width:100%
            height: 46px
            margin-top 20px
            font-size 18px
            line-height 18px
            color: #ffffff
            background-color #337ab7
            border #2e6da4
            padding: 10px 16px
            border-radius 8px
    .regist
      max-width: 330px;
      padding: 15px;
      margin: 0 auto;
      margin-top: 13%;
      border-radius: 5px;
      background: #fff;
      border: 1px #ccc solid;

</style>
