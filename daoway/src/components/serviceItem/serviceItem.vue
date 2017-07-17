<template>
  <div>
    <d-header></d-header>
    <div class="service-wrapper">
      <div class="service-item" v-for="serviceItem in serviceItems" v-if="serviceItem.id==$route.params.whichitem">
        <div class="firstline">
          <div class="allitem">
            所有分类
            <i class="bright">&gt;</i>
            <i class="item-name"><router-link :to="`/item/${serviceItem.id}`">{{serviceItem.name}}</router-link></i>
            <i class="bright">&gt;</i>
          </div>
        </div>
        <div class="secondline">
          <div class="itemlist">
            <span class="fist">分类</span>
            <div>
              <span class="clickAble red"><a href="#">全部</a></span>
              <span class="clickAble" v-for="every in serviceItem.has">{{every}}</span>
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
              <i class="pages">1</i>
              <i class="pageup firstpage">上一页</i>
              <i class="pagedown">下一页</i>
            </span>
            </h3>
            <div class="boxtab" v-for="(serve, index) in serviceItem.server" :key="index">
              <router-link :to="`/detail/${serviceItem.id}/${serve.id}`" >
                <div class="ctop" @click="getServeItem">
                  <img :src="serve.img" class="pic">
                  <span class="spm spm2">
                    <p class="service-name">{{serve.name}}</p>
                    <p class="service-content">服务内容：{{serve.content}}</p>
                    <p class="service-pay">
                    <span class="cost">{{serve.price}}<i>元/小时</i></span>
                    <b class="oldpic" v-show="serve.oldPrice"><i>{{serve.oldPrice}}元</i></b>
                    </p>
                    <p class="navtxt">
                      <b><img src="./home1.png">{{serve.provider}}</b>
                      <b>已售<span>{{serve.already}}</span></b>
                      <b>好评<span>{{serve.praise}}%</span></b>
                    </p>
                  </span>
                  <span class="spf">
                <i class="godoor">最快上门</i>
                <i>2小时</i>
              </span>
                </div>
              </router-link>
            </div>
            <div class="boxpage">
              <a class="pageup firstpage" href="##">&lt;上一页</a>
              <div class="pageshow">
                <a href="##" class="active">1</a>
                <a href="##">2</a>
                <a href="##">3</a>
                <a href="##">4</a>
                <a href="##">5</a>
                <a href="##">6</a>
                <a href="##">7</a>
                <a href="##">8</a>
                <a href="##">9</a>
                &nbsp;&nbsp;...
              </div>
              <a  class="pagedown" href="##">下一页&gt;</a>
            </div>
          </div>
          <div class="item-right">
            <h3>服务商</h3>
            <div class="rightlist" v-for="prove in provider">
              <img :src="prove.providerImg">
              <p class="service-title">{{prove.name}}</p>
              <p class="service-receive">
                <span class="hasreceive">已成功接单{{prove.receive}}</span>
                <span class="goodjob">好评{{prove.goodjob}}%</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <d-footer></d-footer>
  </div>
</template>

<script>
  import header from '../header/header.vue'
  import footer from '../footer/footer.vue'
  export default {
    props: ['serviceItems', 'provider'],
    data () {
      return {
        serviceItem: {}
      }
    },
    created () {
      /*setTimeout(() => {
        console.log("created"+this.provider)
      },1000)*/
    },
    mounted () {
      // console.log("mounted"+this.provider)
    },
    methods: {
      getServeItem () {
        // console.log("get"+this.serviceItems)
        // this.serviceItem = {}
      }
    },
    components: {
      'd-header': header,
      'd-footer': footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .service-wrapper
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
    overflow hidden
    .item-left
      width: 960px
      margin-bottom 50px
      float: left
      h3
        height: 60px
        line-height 60px
        border:1px solid #eaeaea
        font-size 16px
        font-weight normal
        border-bottom none
        background-color #fff
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
      .boxtab
        .ctop
          height: 200px
          border:1px solid #e5e5e5
          background-color #fff
          border-top:none
          cursor pointer
          position relative
          overflow hidden
          img
            width: 140px
            height: 140px
          .pic
            border:1px solid #e5e5e5
            margin: 30px
            float: left
          .spm
            position relative
            top: 25px
            p
              line-height 42px
              height: 42px
              i
                font-size 14px
                font-weight 700
            .service-name
              font-size: 18px;
              color: #1d1515
            .service-content
              color: #929292
              width: 400px
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
            .service-pay
              font-size: 20px;
              color: #fc545e
              .oldpic
                margin-left 20px
                font-size 14px
                color: #e5e5e5
                text-decoration line-through
                i
                  font-weight 200


            .navtxt
              b
                font-size 14px
                color:#929292
                margin-right 15px
                img
                  width:18px
                  height: 17px
                  margin-right 5px
          .spf
            position absolute
            top: 20px
            right: 20px
            border:1px solid #ff7871
            border-radius 4px
            width: 60px
            height: 30px
            font-size 12px
            line-height 15px
            text-align center
            i
              display block
              color:#ff7871
            .godoor
              background-color #ff7871
              color: #fff

        .ctop:hover
          background-color #F8F8F8
      .boxpage
        width: 100%;
        margin: 0 auto;
        height: 152px;
        line-height 152px
        clear: both;
        text-align: center;
        .pageshow
          display inline-block
          a
            display inline-block
            width: 30px
            height:30px
            line-height 30px
            border:1px solid #e5e5e5
            background-color #fff
            color:black
          .active
            background-color #fc545e
        .pageup, .pagedown
          width: 70px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          display: inline-block;
          border: 1px solid #e5e5e5;
          color:#000
          font-size 14px
          margin-left: 12px;
          margin-right: 10px;
          cursor: pointer;
          background-color #fff
        .firstpage
          color:#929292
    .item-right
      width: 230px
      height:100px
      border:1px solid #e5e5e5
      background-color #fff
      float right
      h3
        font-size: 20px;
        padding-left: 10px;
        border-bottom: 1px solid #e5e5e5;
        height: 60px;
        line-height: 60px;
        margin: 0;
        text-align: left
      .rightlist
        height: 200px;
        background: #fff;
        cursor: pointer;
        text-align center
        img
          width:70px
          height: 70px
          margin:30px 50px
          margin-bottom 10px
        .service-title
          margin-top 10px
          font-size 16px
          font-weight 700
          margin-bottom 6px
        .service-receive
          border-bottom: 1px solid #e5e5e5;
          width: 90%;
          margin: 10px auto;
          height: 48px;
          font-size 14px
          line-height: 48px
          padding: 0 10px;
          color:#7e8c8d
          .hasreceive
            float: left
          .goodjob
            float:right


      .rightlist:hover
        background-color #e5e5e5
</style>
