<template>
    <div class="container">
      <el-row>
        <el-col :xs="8" :sm="8" :md="8" :lg="8">
          <div class="blank"></div>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8">
          <!--<div class="login">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>
                  <img src="../../img/main/houtai-logo.png">
                </span>
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
          </div>-->
          <div class="regist">
            <div class="content">
              <h2>注册</h2>
              <div class="control-group">
                <div class="input">
                  <!--<span class="input-group-addon icon-1"><i class="fa fa-user"></i></span>-->
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
              <!--<a class="btn btn-warning btn-lg" ng-href="#/regist">注册</a>-->
              <button class="btn btn-primary btn-lg btn-block" ng-enter="doRegist()" ng-click="doRegist()">注册</button>
            </div>
            <div style="padding: 20px;">
              <a style="margin-left: 80px" ng-href="#/login" href="#/login">已有账户？登录</a>
            </div>
          </div>
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
    .regist
      max-width: 330px;
      padding: 15px;
      margin: 0 auto;
      margin-top: 13%;
      border-radius: 5px;
      background: #fff;
      border: 1px #ccc solid;

</style>
