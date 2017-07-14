<template>
  <div>
    <com-header></com-header>
    <div class="details">
      <div class="service-center">
        <h2>
          <a href="#">所有分类</a>
          <a href="#"> > </a>
          <a href="#">家庭保洁</a>
          <a href="#"> > </a>
        </h2>
        <div class="centerleft">
          <div class="ctop">
            <img class="img-left" :src="bao.img" alt="">
            <span class="information">
              <span class="title">{{bao.name}}</span>
              <span class="Price">
                价格
                <span class="red">{{bao.price}}</span>
                <span class="minred">元/小时</span>
                &nbsp;&nbsp;&nbsp;
                <span class="old">原价{{bao.oldPrice}}元</span>
              </span>
              <br>
              <span class="Price">已售
                <span class="volume">{{bao.already}}</span>
              </span>
            </span>
            <span class="qrcode">
              <img src="./erweima.png" alt="">
              <span class="sao" id="sweep">扫一扫</span>
              <span class="red sao">立即预约</span>
            </span>
          </div>
          <div class="cdown">
            <b>服务描述</b>
            <p id="servicePriceDescription" innertext="服务内容">服务内容：<br>{{bao.content}}<br><br><br>服务保障：<br>{{bao.guarantee}}<br>。<br><br>服务范围：<br>{{bao.range1}}<br></p>
            <b>服务范围</b>
            <p>{{bao.range2}}</p>
            <b>服务时间</b>
            <p>{{bao.time}}<i>最近可预约时间:<em>07月11日 18:00</em></i></p>
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
        <div class="centerright">
          <div class="rightct">
            <h3>服务商</h3>
            <img class="yun" src="./yun.jpg" alt="">
            <p class="jia">{{bao.provider}}</p>
            <p>成功接单 <span>{{bao.success}}</span></p>
            <p>接单率 <span>{{bao.Orders}}%</span></p>
            <p>好评率<span>{{bao.praise}}%</span></p>
          </div>
          <div class="erweima">
            <img src="./daowayApp.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <com-footer></com-footer>
  </div>

</template>

<script>
  import header from '../header/header.vue'
  import footer from '../footer/footer.vue'
  import Bus from '../../common/eventBus'
  import home from '../home/home.vue'
    export default {
      data(){
        return{
            bao:{}
        }
      },
      created(){
        Bus.$on('details', (bao) =>{
          this.bao = bao
        })

      },
      components:{
        'com-header' : header,
        'com-footer' : footer,

      }
    }
</script>


<style scoped>
body{
  background: #fbf8f8;
}
  .details{
    border-top: 1px solid #e0e0e0;
    margin-top: 70px;
  }
  .service-center{
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
  }
  h2 {
    line-height: 85px;

    font-size: 18px;
  }
  h2 a{
    cursor: pointer;
    font-weight: bold;
    color: black;
  }
  .centerleft{
    float: left;
    width: 960px;

    margin-bottom: 50px;
    border: 1px solid #e5e5e5;
    background: #fff;

  }
.ctop .img-left{
  width: 160px;
  height: 160px;
  border: 1px solid #e5e5e5;
  margin: 30px;
  float: left;
}
.information{
  float: left;
  position: relative;
  top: 25px;
}
.information span:nth-child(1) {
  font-size: 18px;
  color: #1d1515;
}
.information>span{
  display: block;
  line-height: 42px;
  height: 42px;
}
.red{
  font-size: 20px;
  color: #fc545e !important;
  margin-left: 10px;
  font-weight: bold;
}
.minred{
  color: #fc545e;
}
.volume{
  color: #fc545e !important;
  font-size: 15px !important;
}
.old{
  color: #7e8c8d;
  text-decoration:line-through

}

.Price{
  float: left;
  display: block;
  line-height: 42px;
  height: 42px;
}

.qrcode{
  float: right;

}
.qrcode img{
  margin: 40px 40px 0;
  width: 120px;
  height: 120px;
  display: inline-block;
}
.sao{
  display: block;
  text-align: center;
  line-height: 30px;
  font-size: 16px;
}
.centerright{
  float: right;
  width: 230px;
}
.rightct {


  border: 1px solid #e5e5e5;
  background: #fff;
  text-align: center;
}
.rightct h3 {
  font-size: 20px;
  padding-left: 10px;
  border-bottom: 1px solid #e5e5e5;
  height: 60px;
  line-height: 60px;
  margin: 0;
  text-align: left;
}
.rightct p {
  text-align: left;
  padding: 0 10px;
  line-height: 36px;
  margin-bottom: 0;
  font-size: 16px;
}
.yun{
  width: 80px;
  height: 80px;
  margin: 40px 50px;
  margin-bottom: 10px;
}
.rightct span{
  float: right;
  color: #fb474f;
}
.jia{
  margin-left: 75px;
  font-weight: bold;
}
.erweima {
  width: 230px;
  height: 290px;
  background: url(./tuijianfuwushang_06.jpg) no-repeat center;
  margin-top: 10px;
}
.erweima img{
  width: 130px;
  height: 130px;
  margin: 50px 0 0 50px;
}
.cdown {
  clear: both;
  background: #fff;
  padding: 30px 20px;
  border: 1px solid #e5e5e5;
  margin-top: 10px;
}
.cdown b {
  border-bottom: 3px solid #fb474f;
  padding: 5px;
  margin-top: 10px;
  width: 66px;
  display: block;
}
.cdown p {
  line-height: 24px;
  margin: 15px 0 5px;
  font-size: 14px;
}
.cdown b {
  border-bottom: 3px solid #fb474f;
  padding: 5px;
  margin-top: 10px;
  width: 66px;
  display: block;
}
.cdown p i {
  margin-left: 20px;
}
.cdown p i em {
  color: #fb474f;
  font-style: normal;
}



</style>
