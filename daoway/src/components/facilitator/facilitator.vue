<template>
  <div>
    <d-header></d-header>
    <div class="facilitator">
      <h2>服务商</h2>
      <div class="service-center1">
        <div class="centerleft">
          <div class="tabdiv">
            <ul class="ulactivety">
              <li v-for="(prove, index) in provider" :key="index">
                <img :src="prove.providerImg">
                <p class="liname">
                  <img src="./home1.png">
                  <b>{{prove.name}}</b>
                </p>
                <p class="goodjob1">
                  已接单{{prove.receive}}单
                  <i>好评{{prove.goodjob}}%</i>
                </p>
              </li>

            </ul>
          </div>
          <div class="getServiceList">
            <span>查看更多商家
              <img src="./fuwu_down2.jpg">
            </span>
          </div>
        </div>
        <div class="centerright">
          <img style="cursor:pointer" src="./tuijianfuwushang_03.jpg">
          <div class="erweima">
            <img src="./daowayApp.png">
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
    props: ['provider'],
    components: {
      'd-header': header,
      'd-footer': footer
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  *
    margin:0
    padding:0
  img
    vertical-align middle
  .facilitator
    overflow hidden
    h2
      width 1200px
      line-height 85px
      margin:0 auto
      font-size 18px
    .service-center1
      width: 1200px
      margin:0 auto
      overflow hidden
      .centerleft
        width: 970px
        float: left
        .tabdiv
          .ulactivety
            overflow hidden
            li
              width: 232px
              height: 300px
              border:1px solid #eaeaea
              box-sizing border-box
              padding: 10px
              float left
              margin-right 10px
              margin-bottom 10px
              cursor: pointer
              img
                width: 210px
                height: 210px
                margin-bottom 10px
              .liname
                height: 26px
                line-height 26px
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
                img
                  margin-bottom 5px
                  width: 18px
                  height: 17px
              .goodjob1
                font-size 12px
                color: #929292
                height: 26px
                line-height 26px
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
                i
                  float: right
            li:hover
              box-shadow: 6px 6px 14px 0 #eaeaea;
        .getServiceList
          width: 100%
          height: 152px
          clear both
          text-align center
          span
            display inline-block
            width:200px
            height 50px
            line-height 50px
            border:1px solid #e5e5e5
            border-radius 5px
            margin: 50px 5px
            font-size 16px
            color:#b1b1b1
            cursor: pointer
            img
              margin-left: 5px
      .centerright
        width: 230px
        float: right
        .erweima
          width: 230px
          height 290px
          background url("../../img/main/tuijianfuwushang_06.jpg") no-repeat
          background-size 230px 300px
          padding: 50px
          margin-top 10px
          img
            width: 130px;
            height: auto;


</style>
