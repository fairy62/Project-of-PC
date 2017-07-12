<template>
  <div>
    <d-header></d-header>
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
    <main-list></main-list>
    <d-footer></d-footer>
  </div>
</template>

<script>
  import mainList from '../mainList/mainList.vue'
  import header from '../header/header.vue'
  import footer from '../footer/footer.vue'
  export default {
    components: {
      'd-header': header,
      'main-list': mainList,
      'd-footer': footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
