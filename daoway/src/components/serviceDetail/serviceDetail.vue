<template>
  <div>
    <v-header></v-header>
    <div class="service_wrapper">
      <div class="service_detail">
        <h2>
          所有分类
          <i class="bright">></i>
          <i class="item_list"><router-link to="/item/baojie">{{serve.type}}</router-link></i>
          <i class="bright">></i>
        </h2>
        <div class="detail_left">
          <div class="detail_ctop">
            <div class="imgWrap"><img class="detail_pic" :src="serve.img"></div>

            <div class="detail_price">
              <p>{{serve.name}}</p>
              <p>价格<b>{{serve.price}}</b><i>元/小时</i><span>原价<span class="oldPrice" v-show="serve.oldPrice">{{serve.oldPrice}}元</span></span></p>
              <p v-show="false">优惠<i>首单立减10元</i></p>
              <p>已售<i>{{serve.already}}</i></p>
            </div>
            <span class="spf">
              <i id="qrcode">
                <img src="./xiazai.png" width="115" height="115">
              </i>
              <b>扫一扫</b>
              <b>立即预约</b>
            </span>
          </div>
          <div class="serviceText">
            <b>服务描述</b>
            <p id="servicePriceDescription">服务内容：
              <br><p v-html="serve.content"></p><br>
              <b>服务范围</b>
            <p>{{serve.range}}</p>
            <b>服务时间</b>
            <p>{{serve.time}}<i>最近可预约时间:<em>{{serve.ableTime}}</em></i></p>
            <b>订购须知</b>
            <p id="orderingNotice" style="background: #fffcf1" v-html="serve.must"></p>
            <b>商家简介</b>
            <p id="serviceDescription">云家政是家政服务在线预订平台。我们的目标是让每个家庭都能获得诚信、便捷、有保障的家政服务。云家政拥有国内最大的实名认证家庭服务员数据库，目前平台上有超过100000名专业服务人员；数百个家政服务商，遍布全国主要城市各个社区。<br>云家政倡导简单、轻松的生活方式。通过把分散的家政服务能力汇集和分配，让中国家庭获得诚信、便捷、有保障的家政服务，解决日常生活中的麻烦事，把更多时间留给自己和家人，提高生活品质。</p>
          </div>
        </div>
        <div class="detail_right">
          <div class="right-content">
            <h3>服务商</h3>
            <img src="./yun.jpg" alt="">
            <p class="serviceName">{{serve.provider}}</p>
            <p>成功接单<i>{{serve.pSuccess}}</i></p>
            <p>接单率<i>{{serve.pOrders}}%</i></p>
            <p>好评率<i>{{serve.pPraise}}%</i></p>
          </div>
          <div class="daowei">
            <img src="../../img/main/daowayApp.png" alt="" >
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
  import header from '../../components/header/header.vue'
  import footer from '../../components/footer/footer.vue'
  export default {
    props: ['serviceItems'],
    data () {
      return {
        serviceItem: {},
        serve: {}
      }
    },
    created () {
      /*if (this.serviceItems == []) {
        return
      }*/
      this.serviceItems.forEach((item) => {
        if (item.id == this.$route.params.whichitem) {
          // 获得当前服务项目类
          this.serviceItem = item
          console.log(this.serviceItem.server)
          this.serviceItem.server.forEach((serve) => {
            if (serve.id == this.$route.params.whichserve) {
              this.serve = serve
              // console.log(this.serve)
            }
          })
        }
      })

      // console.log(this.serve)
    },
    computed: {
      /*serveContent () {
        let content = []
        content = this.serve.content.split('*')
        return content
      }*/
    },
    components:{
      'v-header':header,
      'v-footer':footer,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  img
    vertical-align middle
  .service_wrapper
    background: #fbf8f8
    .service_detail
      width: 1200px
      margin:  0 auto
      overflow: hidden
      & h2
        line-height: 85px
        width: 1200px
        font-size: 18px
        font-weight bold
        .bright
          margin: 0 10px
        .item_list a
          display inline-block
          padding-bottom 5px
      .detail_left
        width: 960px
        float: left
        .detail_ctop
          height: 220px
          background: #fff
          border: 1px solid #e5e5e5;
          .imgWrap
            display inline-block
            width 160px
            heigth: 160px
            margin: 30px
            .detail_pic
              width:100%
              height:100%
          .detail_price
            width: 210px
            display inline-block
            position relative
            font-size 14px
            top:10px
            p
              margin-bottom 20px
            p:nth-child(1)
              font-size 18px
            p:nth-child(2)

            p:nth-child(2) i
              color: #fc545e
              font-size 14px
              font-weight 700
            p:nth-child(2) b
              color: #fc545e
              font-size 20px
              font-weight 700
              padding-left 8px
            p:nth-child(2) span
              margin-left 30px
              color #7e8c8d
              .oldPrice
                margin-left 0
                text-decoration: line-through
            p:nth-child(3) i
              border: 1px solid #fc545e
              display inline-block
              border-radius 6px
              font-size 12px
              padding: 5px
              margin-left 10px
              color:#fc545e
            p:nth-child(4) i
              padding-left 10px
              color: #fc545e

          .spf
            margin: 20px 60px 0 0
            float: right
            & b
              display: block
              text-align: center
              line-height: 30px
              font-weight: bold
            & b:nth-child(3)
              color: #fb474f
          & li #qrcode
            margin: 0px

        .serviceText
          clear: both;
          background: #fff;
          padding: 30px 20px;
          border: 1px solid #e5e5e5;
          margin-top: 10px;
          & b
            border-bottom: 3px solid #fb474f;
            padding: 5px;
            margin-top: 10px;
            margin-bottom: 15px
            width: 66px;
            font-size 14px
            font-weight bold
            display: block;
          & p
            line-height 25px
            font-size 13px
            & em
              color: #fb474f
            & i
              margin-left: 50px
      .detail_right
        float: right
        width: 230px
        .right-content
          background: #fff
          border: 1px solid #e5e5e5
          text-align: center
          & h3
            font-size: 20px;
            padding-left: 10px;
            border-bottom: 1px solid #e5e5e5;
            height: 60px;
            line-height: 60px;
            font-weight bold
            text-align: left;
          & img
            text-align: center;
            width: 80px
            height 80px
            margin: 40px 50px;
            margin-bottom: 10px;
          & p
            text-align: left;
            padding: 0 10px;
            line-height: 36px;
            margin-bottom: 0;
            font-size: 16px;
            & i
              float: right;
              color: #fb474f;
          & .serviceName
            text-align: center
            margin-bottom: 20px
            line-height: 32px
            font-weight: bold
        .daowei
          width: 230px
          height: 290px
          background: url(../../img/main/tuijianfuwushang_06.jpg) no-repeat center
          margin-top: 10px
          & img
            width: 130px
            height: auto
            margin: 50px 0 0 50px
</style>
