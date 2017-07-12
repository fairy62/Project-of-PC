<template>
  <div>
    <v-header></v-header>
    <div class="service_wrapper">
      <div class="service_detail">
        <h2>
          所有分类
          <i class="bright">></i>
          <i class="item_list"><router-link to="/itemList">家庭保洁</router-link></i>
          <i class="bright">></i>
        </h2>
        <div class="center_left">
          <div class="ctop">
            <img class="pic" src="../../img/main/5cf8680f-0264-4686-ba05-145700db6063_thumb.jpg" width="160" height="160">
            <span class="price">
            <div>家庭保洁</div>
            <div>价格 <b>30</b><i>元/小时</i></div>
            <div>原价<i>50元</i></div>
            <div style="display: none">优惠<i>首单立减10元</i></div>
            <div>已售<i>841</i></div>
          </span>
            <span class="spf">
            <i id="qrcode">
              <img src="./xiazai.png" alt="" width="115" height="115">
            </i>
            <b>扫一扫</b>
            <b>立即预约</b>
            </span>
          </div>
          <div class="serviceText">
            <b>服务描述</b>
            <p id="servicePriceDescription" innertext="服务内容：
家庭保洁服务，2小时起订。（云家政暂时不提供带保洁工具上门服务）

服务保障：
1.根据满意度提交评价。
2.清洁内容丰富，专注卫生死角。
3.价格透明，在规定服务时间内不现场加价。
4.服务标准化，品质可预见。
5.发现怠工，随即终止服务或出现服务质量问题，可致电云家政客服热线协助处理。

服务范围：
（可以在购买时间内自由安排服务项目，超出服务范围的服务要求可以现场与工人沟通）
1.客餐厅：电视柜、茶几、桌面、门、餐桌、垃圾桶、沙发下、地面、卫生死角。
2.卧室和阳台：阳台扶手、开关、插座、及其他。
3.书房和储物间：桌面、书柜、垃圾桶、地面、卫生死角及其他。
4.厨房：抽油烟机表面、橱柜、洗菜池、台面、地面、垃圾桶及其他。
5.卫生间：洗漱台、沐浴房、马桶、垃圾桶、地面及其他。">服务内容：<br>家庭保洁服务，2小时起订。（云家政暂时不提供带保洁工具上门服务）<br><br>服务保障：<br>1.根据满意度提交评价。<br>2.清洁内容丰富，专注卫生死角。<br>3.价格透明，在规定服务时间内不现场加价。<br>4.服务标准化，品质可预见。<br>5.发现怠工，随即终止服务或出现服务质量问题，可致电云家政客服热线协助处理。<br><br>服务范围：<br>（可以在购买时间内自由安排服务项目，超出服务范围的服务要求可以现场与工人沟通）<br>1.客餐厅：电视柜、茶几、桌面、门、餐桌、垃圾桶、沙发下、地面、卫生死角。<br>2.卧室和阳台：阳台扶手、开关、插座、及其他。<br>3.书房和储物间：桌面、书柜、垃圾桶、地面、卫生死角及其他。<br>4.厨房：抽油烟机表面、橱柜、洗菜池、台面、地面、垃圾桶及其他。<br>5.卫生间：洗漱台、沐浴房、马桶、垃圾桶、地面及其他。</p>
            <b>服务范围</b>
            <p>北京 上海 广州 深圳 南京 武汉 西安 成都 杭州 苏州 天津 常州 东莞 合肥 宁波 无锡 厦门 郑州 佛山</p>
            <b>服务时间</b>
            <p>08:00-20:00<i>最近可预约时间:<em>07月11日 15:00</em></i></p>
            <b>订购须知</b>
            <p id="orderingNotice" style="background: #fffcf1" innertext="1.商家将在您下单后30分钟内确认是否接单；
2.订单确认后，修改订单或退款需提前2小时通知；
3.预约时间前2小时内退单将按30元/人扣取空单费；
4.如商家接单后爽约将全额退款并向您额外赔付30元；
5.为保障您的权益，所有费用请通过到位平台支付。">1.商家将在您下单后30分钟内确认是否接单；<br>2.订单确认后，修改订单或退款需提前2小时通知；<br>3.预约时间前2小时内退单将按30元/人扣取空单费；<br>4.如商家接单后爽约将全额退款并向您额外赔付30元；<br>5.为保障您的权益，所有费用请通过到位平台支付。</p>
            <b>商家简介</b>
            <p id="serviceDescription" innertext="云家政是家政服务在线预订平台。我们的目标是让每个家庭都能获得诚信、便捷、有保障的家政服务。云家政拥有国内最大的实名认证家庭服务员数据库，目前平台上有超过100000名专业服务人员；数百个家政服务商，遍布全国主要城市各个社区。
云家政倡导简单、轻松的生活方式。通过把分散的家政服务能力汇集和分配，让中国家庭获得诚信、便捷、有保障的家政服务，解决日常生活中的麻烦事，把更多时间留给自己和家人，提高生活品质。">云家政是家政服务在线预订平台。我们的目标是让每个家庭都能获得诚信、便捷、有保障的家政服务。云家政拥有国内最大的实名认证家庭服务员数据库，目前平台上有超过100000名专业服务人员；数百个家政服务商，遍布全国主要城市各个社区。<br>云家政倡导简单、轻松的生活方式。通过把分散的家政服务能力汇集和分配，让中国家庭获得诚信、便捷、有保障的家政服务，解决日常生活中的麻烦事，把更多时间留给自己和家人，提高生活品质。</p>
          </div>
        </div>
        <div class="center_right">
          <div class="right-content">
            <h3>服务商</h3>
            <img src="./yun.jpg" alt="">
            <p class="serviceName">云家政</p>
            <p>成功接单<i>26860</i></p>
            <p>接单率<i>96%</i></p>
            <p>好评率<i>86%</i></p>
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

    components:{
      'v-header':header,
      'v-footer':footer,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
      .center_left
        width: 960px
        float: left
        .ctop
          height: 220px
          background: #fff
          border: 1px solid #e5e5e5;
          .pic
            margin: 30px
          .price
            width: 210px
            display inline-block
            position relative
            font-size 15px
            & div
              margin-bottom 20px
            & div:nth-child(1)
              font-size 20px
            & div:nth-child(2) i
              color: #fc545e
              font-size 15px
            & div:nth-child(2) b
              color: #fc545e
              font-size 20px
              padding-left 10px
            & div:nth-child(3)
              color #7e8c8d
              text-decoration: line-through
            & div:nth-child(5) i
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
            width: 56px;
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
      .center_right
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
          margin-top: 20px
          & img
            width: 130px
            height: auto
            margin: 50px 0 0 50px
</style>
