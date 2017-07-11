<template>
    <div class="service-item">
      <div class="firstline">
        <div class="allitem">
          所有分类
          <i class="bright">&gt;</i>
          <i class="item-name">家庭保洁</i>
          <i class="bright">&gt;</i>
        </div>
      </div>
      <div class="secondline">
        <div class="itemlist">
          <span class="fist">分类</span>
          <div>
            <span class="clickAble red">全部</span>
            <span class="clickAble ">小时工</span>
            <span class="clickAble ">开荒保洁</span>
            <span class="clickAble ">擦玻璃</span>
            <span class="clickAble ">深度保洁</span>
            <span class="clickAble ">家居养护</span>
            <span class="clickAble ">杀虫灭鼠</span>
          </div>
        </div>
      </div>
      <div class="third">
        <div class="item-left">
          <h3>
            <span class="paihang">
              <i class="activity">推荐排序</i>
              <i>销量高
                <img src="./fuwu_down2.jpg">
              </i>
              <i>好评多
                <img src="./fuwu_down2.jpg">
              </i>
              <i>上门快
                <img src="./fuwu_down2.jpg">
              </i>
              <i>价格低
                <img src="./fuwu_down2.jpg">
              </i>
            </span>
            <span class="spanright">
              <i class="count">1</i>/
              <i class="pages">55</i>
              <i class="pageup firstpage">上一页</i>
              <i class="pagedown">下一页</i>
            </span>
          </h3>
          <div class="boxtab"></div>
          <div class="boxpage"></div>
        </div>
        <div class="item-right"></div>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
body
  background-color #F8F8F8
.service-item
  width: 1200px;
  margin:0 auto
  .firstline
    line-height 85px
    font-size 18px
    .allitem
      font-weight 700
      .bright
        margin: 0 10px
    .item-name
      color: #fb4e55
  .secondline
    border:1px solid #eaeaea
    background-color #fff
    .itemlist
      line-height 50px
      overflow hidden
      span
        cursor pointer
      .fist
        color:#a9a9a9
        font-size 16px
        display:inline-block
        width: 100px
        padding:0 10px
        text-align center
        float:left
      div
        .clickAble
          display inline-block
          text-align right
          padding: 0 10px
          font-size 16px
        .red
          color: #fb4e55

  .third
    margin-top 10px
    background-color greenyellow
    overflow hidden
    .item-left
      width: 960px
      margin-bottom 50px
      float: left
      background-color #fff
      h3
        height: 60px
        line-height 60px
        border:1px solid #eaeaea
        font-size 16px
        font-weight normal
        border-bottom none
        overflow hidden
        .paihang
          float: left
          i
            cursor: pointer;
            margin:0 20px
            padding-bottom 16px
            img
              width: 12px
              height:7px
          .activity
            color: #fb474f
            border-bottom 4px solid #fb474f
        .spanright
          float right
          i
            font-size 12px
          .count
            color:#e84b47
          .firstpage
            color:#929292
          .pagedown,.pageup
            width: 70px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            display: inline-block;
            border: 1px solid #e5e5e5;
            margin-left: 12px;
            margin-right: 10px;
            cursor: pointer;
    .item-right
      width: 230px
      height:100px
      background-color red
      float right
</style>
