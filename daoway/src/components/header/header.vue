<template>
  <div id="header">
    <div class="sticky-wrapper">
      <div class="nav-header">
        <el-row style="overflow: hidden">
          <el-col :xs="0" :sm="0" :md="0" :lg="1">
            <div class="black"></div>
          </el-col>
          <el-col :xs="24" :sm="10" :md="8" :lg="8">
            <div class="header-left">
              <router-link to="/">
                <img src="../../img/main/logo.png">
              </router-link>
            </div>
          </el-col>
          <el-col :xs="0" :sm="14" :md="16" :lg="14" style="white-space: nowrap">
            <div class="header-right">
              <ul class="header-ul">
                <li id="position">
                  <img src="../../img/main/citypoint.png">
                  <i id="showCity">北京</i>
                  <i id="city">切换城市</i>
                </li>
                <li>
                  <router-link to="/">首页</router-link>
                </li>
                <li>
                  <a href="###">下载App</a>
                </li>
                <li>
                  <router-link to="facilitator">服务商</router-link>
                </li>
                <li>
                  <a href="###">商家入驻</a>
                </li>
                <li>
                  <a href="###">关于我们</a>
                </li>
                <li class="shanghu">
                  <router-link to="register">
                    <el-button type="danger">商家登录</el-button>
                  </router-link>
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :xs="0" :sm="0" :md="0" :lg="1">
            <div class="black"></div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue'
  import {Row, Col, Button, Carousel} from 'element-ui'

  Vue.use(Row)
  Vue.use(Col)
  Vue.use(Button)
  Vue.use(Carousel)

  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  *
    margin: 0
    padding: 0
  ul
    list-style none
  i
    font-style normal
  img
    vertical-align middle
  a
    text-decoration none
  #header
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
  .sticky-wrapper
    height: 70px
    line-height 70px
  .sticky-wrapper:after {
    content: '';
    display: block;
    clear: both;
    overflow: hidden;
    }
    .nav-header
      height: 65px
      line-height 65px
      .header-left
        height: 65px
        width: 280px
      .header-right
        height: 65px
        line-height 65px
        .header-ul
          height: 42px
          overflow hidden
          li
            float: left
            display block
            a
              color: #121212
              font-weight 700
              padding: 10px 15px
          #position
            margin-right: 50px
            color: #121212
            font-weight 700
            #showCity
              margin-right: 5px
          .active
            color: #e94840
          .shanghu
            margin-right: 10px
            float: right
      .black
        height: 65px
</style>
