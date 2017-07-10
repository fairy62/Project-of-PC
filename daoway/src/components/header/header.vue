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
                <li class="active">
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
                  <router-link to="shanghu">
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
    <div class="carousel">
      <div class="flicker-example">
        <!--banner区域-->
        <div class="full_banner">
          <!--banner动画区域-->
          <div class="bd" style="position:relative;width:1349px">
            <el-carousel trigger="click" height="420px">
              <el-carousel-item>
                <span class="span span1"></span>
              </el-carousel-item>
              <el-carousel-item>
                <span class="span span2"></span>
              </el-carousel-item>
              <el-carousel-item>
                <span class="span span3"></span>
              </el-carousel-item>
            </el-carousel>
          </div>
          <!--小球区域-->
          <div class="hd"></div>
        </div>
        <!--导航菜单-->
        <div class="banner_nav">
          <div class="ul_wrapper">
            <ul>
              <li class="navname">
                <a href="###" target="_blank"></a>
                <i>家庭保洁</i>
                <i class="gt_icon">&gt;</i>
                <ul class="detail" style="display: none">
                  <li><a href="###" target="_blank">小时工</a></li>
                  <li><a href="###" target="_blank">开荒保洁</a></li>
                  <li><a href="###" target="_blank">擦玻璃</a></li>
                  <li><a href="###" target="_blank">深度保洁</a></li>
                  <li><a href="###" target="_blank">家居养护</a></li>
                  <li><a href="###" target="_blank">杀虫灭鼠</a></li>
                </ul>
              </li>
              <li class="navname">
                <a href="###" target="_blank"></a>
                上门按摩
                <i class="gt_icon">&gt;</i>
                <ul class="detail" style="display: none">
                  <li><a href="###" target="_blank">中医推拿</a></li>
                  <li><a href="###" target="_blank">油压SPA</a></li>
                  <li><a href="###" target="_blank">局部理疗</a></li>
                  <li><a href="###" target="_blank">足疗套餐</a></li>
                  <li><a href="###" target="_blank">美体塑形</a></li>
                  <li><a href="###" target="_blank">母婴保健</a></li>
                </ul>
              </li>
              <li class="navname">
                <a href="###" target="_blank"></a>
                上门维修
                <i class="gt_icon">&gt;</i>
              </li>
              <li class="navname">
                <a href="###" target="_blank"></a>
                家电清洗
                <i class="gt_icon">&gt;</i>
              </li>
              <li class="navname">
                <a href="###" target="_blank"></a>
                衣物洗护
                <i class="gt_icon">&gt;</i>
              </li>
              <li class="navname">
                <a href="###" target="_blank"></a>
                搬家速运
                <i class="gt_icon">&gt;</i>
              </li>
              <li class="navname">
                <a href="###" target="_blank"></a>
                美容美妆
                <i class="gt_icon">&gt;</i>
              </li>
              <li class="navname">
                <a href="###" target="_blank"></a>
                鲜花植物
                <i class="gt_icon">&gt;</i>
              </li>
              <li class="navname">
                <a href="###" target="_blank"></a>
                上门医护
                <i class="gt_icon">&gt;</i>
              </li>
              <li class="navname">
                <a href="###" target="_blank"></a>
                养车用车
                <i class="gt_icon">&gt;</i>
              </li>
            </ul>
          </div>
        </div>
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

    .carousel
      height: 420px
      margin-bottom: 0
      box-sizing: border-box
      .flicker-example
        .full_banner
          width: 100%;
          position: relative;
          height: 420px;
          background: #FFF;
          overflow: hidden
          .bd
            margin: 0 auto;
            position: relative;
            z-index: 0;
            overflow: hidden;
            .span
              display block
              width: 1349px
              height: 420px
            .span1
              background url("../../img/main/banner1.jpg") no-repeat center center
            .span2
              background url("../../img/main/banner2.jpg") no-repeat center center
            .span3
              background url("../../img/main/banner3.jpg") no-repeat center center
          .hd
            width: 100%;
            position: absolute;
            z-index: 1;
            bottom: 0;
            left: 0;
            height: 30px;
            line-height: 30px;
            text-align: center;
        .banner_nav
          width: 200px
          height: 422px
          position: relative
          bottom: 422px
          .ul_wrapper
            position absolute
            left: 20px
            width: 180px
            height: 422px
            ul
              width: 180px
              height: 420px
              margin-top 2px
              background-color #757881
              li
                position relative
                height: 42px
                line-height: 42px
                font-size 16px
                font-weight 700
                cursor pointer
                padding-left 45px
                color: #fff
                .detail
                  position absolute
                  left: 180px
                  top: 0
                  width: 160px
                  background-color rgba(255, 255, 255, 0.7)
                  li
                    height: 42px
                    line-height: 42px
                    a
                      color: #121212
                      font-weight 700
                a
                  width: 100%
                  height: 100%
                i
                  font-weight 700
                .gt_icon
                  position absolute
                  right: 30px
</style>
