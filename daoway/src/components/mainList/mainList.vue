<template>
    <div class="box1">
      <div class="fff">
        <div class="servicebody">
          <div class="navigation">
            <span class="serviceIndex">家庭保洁</span>
            <span class="serviceType">小时工/开荒保洁/擦玻璃/深度保洁/家居养护/杀虫灭鼠</span>
          </div>
          <div class="servicetags">
            <div class="tagsListHeader">
              <span class="lookMore">
                <router-link to="item" style="color: #898989; font-size: 18px">更多服务&gt;</router-link>
              </span>
            </div>
            <div class="row">
              <router-link class="form-group shopList" to="detail">
                <div class="member-container ServiceBorder">
                  <img src="../../img/main/5cf8680f-0264-4686-ba05-145700db6063_thumb.jpg" class="serviceImg" width="210px" height="210px">
                  <div class="serviceName">家庭保洁</div>
                  <div class="description">服务内容：家庭保洁服务，2小时起订。（云家政暂时不提供带保...</div>
                  <div class="price">
                    <span style="font-size: 20px">30</span>元/小时
                    <span class="btn">查看详情</span>
                  </div>
                </div>
              </router-link>

              <router-link class="form-group shopList" to="detail">
                <div class="col-md-3 col-xs-6 member-container ServiceBorder">
                  <img src="../../img/main/41491c6c-afd7-449e-9037-e2bf6d72d430_thumb.jpg" class="serviceImg" width="210px" height="210px">
                  <div class="serviceName">室内保洁</div>
                  <div class="description">服务内容：1.室内保洁服务，2小时起订，服务商携带清洁装备...</div>
                  <div class="price">
                    <span style="font-size: 20px">29</span>
                    元/小时
                    <span class="btn">查看详情</span>
                  </div>
                </div>
              </router-link>

              <router-link class="form-group shopList" to="detail">
                <div class="col-md-3 col-xs-6 member-container ServiceBorder">
                  <img src="../../img/main/83a8ce32-cb8e-4256-9059-377b9a7391b3_thumb.jpg" class="serviceImg" width="210px" height="210px">
                  <div class="serviceName">家庭保洁</div>
                  <div class="description">服务内容：1.家庭保洁服务，2小时起订，服务商携带清洁装备...</div>
                  <div class="price">
                    <span style="font-size: 20px">35</span>
                      元/小时
                    <span class="btn">查看详情</span></div>
                </div>
              </router-link>

              <router-link class="form-group shopList" to="detail">
                <div class="col-md-3 col-xs-6 member-container ServiceBorder">
                  <img src="../../img/main/a71fcfd6-a2b3-43e2-82ea-c1ac4c6150f9_thumb.jpg" class="serviceImg" width="210px" height="210px">
                  <div class="serviceName">金牌保洁＋全屋清洁消毒杀菌</div>
                  <div class="description">温馨提示：若需要女保洁员请在备注上标明，谢谢.服务内容：1...</div>
                  <div class="price">
                    <span style="font-size: 20px">149</span>元/3小时
                    <span class="btn">查看详情</span></div>
                </div>
              </router-link>

              <router-link class="form-group shopList" to="detail" >
                <div class="col-md-3 col-xs-6 member-container ServiceBorder">
                  <img src="../../img/main/d6ebc1f0-6364-408c-b3fa-5a899e4eba7a_thumb.jpg" class="serviceImg" width="210px" height="210px">
                  <div class="serviceName">日常保洁  小时工</div>
                  <div class="description">服务内容：日常保洁，2个小时起订，阿姨携带工具包括，毛巾，...</div>
                  <div class="price">
                    <span style="font-size: 20px">35</span>元/小时<span class="btn">查看详情</span>
                  </div>
                </div>
              </router-link>

            </div>

          </div>
        </div>
      </div>
    </div>

</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  *
    box-sizing border-box
  .box1
    height:560px
    width:100%
    background-color greenyellow
    .fff
      width:1200px
      clear both
      padding: 60px 0
      margin: 0 auto
      .servicebody
        .navigation
          text-align center
          span
            display block
          .serviceIndex
            color: #3d3838
            font-size 28px
            font-weight 800
            font-family "Microsoft YaHei"
          .serviceType
            font-size: 22px
            color: #3d3838
            margin-top: 15px
        .servicetags
          .tagsListHeader
            text-align right
            .lookMore
              position relative
              bottom: 10px
          .row
            margin-top: 10px;
            margin-left: 0;
            margin-right: 0;
            .form-group
              position: relative
              margin-bottom 0
              .ServiceBorder
                float: left;
                padding: 10px;
                width: 230px;
                border: 1px solid #eaeaea;
                margin: 0 5px;
                background: #fff;
                cursor: pointer;
                height: 345px;
                .serviceName
                  font-size: 16px;
                  padding: 10px 0;
                  font-weight: 800;
                  color: #000;
                  height: 28px;
                  overflow: hidden;
                  width: 100%;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                .description
                  color: #929292;
                  padding: 5px 0;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  word-break: break-all;
                  font-size: 13px;
                  line-height: 18px;
                  height: 58px;
                .price
                  font-size: 14px;
                  padding: 5px 5px;
                  font-weight: 600;
                  height: 20px;
                  line-height: 20px;
                  color: #fb474f;
                  .btn
                    float: right;
                    padding: 0;
                    width: 76px;
                    height: 24px;
                    line-height: 22px;
                    text-align: center;
                    background: #fb474f;
                    border-radius: 5px;
                    color: #fff;
                    font-size: 14px;
</style>
